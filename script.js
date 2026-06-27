const quizEl = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');
const toggleBtn = document.getElementById('toggle-images');
const resultEl = document.getElementById('result');

let showImages = true;
const hasImages = window.QUIZ_DATA && window.QUIZ_DATA.some(q => q.image);
if (!hasImages && toggleBtn) {
  toggleBtn.style.display = 'none';
}

function renderBlocks(blocks) {
  return blocks.map(block => {
    if (block.type === 'pre') {
      return `<pre>${escapeHtml(block.text)}</pre>`;
    }
    return `<p>${escapeHtml(block.text)}</p>`;
  }).join('');
}

function renderQuiz() {
  quizEl.innerHTML = '';
  window.QUIZ_DATA.forEach((q, idx) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.qid = q.id;

    const choiceHtml = q.choices.map((c, i) => {
      const id = `q${idx}_c${i}`;
      return `
        <label class="choice">
          <input type="radio" name="q${idx}" value="${i}" id="${id}">
          <span>${escapeHtml(c)}</span>
        </label>
      `;
    }).join('');

    const imageHtml = q.image
      ? `<div class="image-wrap" style="display:${showImages ? 'block' : 'none'}">
          <img src="${q.image}" alt="${escapeHtml(q.title)}" loading="lazy">
        </div>`
      : '';

    card.innerHTML = `
      <h2>${escapeHtml(q.title)}</h2>
      <div class="meta">Mã câu: ${escapeHtml(q.id)}</div>
      <div class="prompt">${renderBlocks(q.blocks)}</div>
      <div class="choices">${choiceHtml}</div>
      ${imageHtml}
    `;

    quizEl.appendChild(card);
  });
}

function grade() {
  let correct = 0;
  const total = window.QUIZ_DATA.length;

  window.QUIZ_DATA.forEach((q, idx) => {
    const card = quizEl.querySelector(`[data-qid="${q.id}"]`);
    const selected = card.querySelector(`input[name="q${idx}"]:checked`);
    const choices = [...card.querySelectorAll('.choice')];

    choices.forEach(choice => choice.classList.remove('correct', 'incorrect'));

    if (selected) {
      const chosen = Number(selected.value);
      if (chosen === q.answerIndex) {
        correct += 1;
        choices[chosen].classList.add('correct');
      } else {
        choices[chosen].classList.add('incorrect');
        choices[q.answerIndex].classList.add('correct');
      }
    } else {
      choices[q.answerIndex].classList.add('correct');
    }
  });

  resultEl.textContent = `Bạn trả lời đúng ${correct} / ${total} câu.`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetQuiz() {
  quizEl.querySelectorAll('input[type="radio"]').forEach(input => {
    input.checked = false;
  });
  quizEl.querySelectorAll('.choice').forEach(choice => {
    choice.classList.remove('correct', 'incorrect');
  });
  resultEl.textContent = 'Chưa nộp bài.';
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

submitBtn.addEventListener('click', grade);
resetBtn.addEventListener('click', resetQuiz);
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    showImages = !showImages;
    quizEl.querySelectorAll('.image-wrap').forEach(el => {
      el.style.display = showImages ? 'block' : 'none';
    });
  });
}

renderQuiz();
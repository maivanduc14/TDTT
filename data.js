window.QUIZ_DATA = [
  {
    "id": "Q1",
    "title": "Question 1",
    "blocks": [
      {
        "type": "p",
        "text": "Khi giải quyết bài toán tìm số lớn nhất trong một danh sách, việc xác định các bước cụ thể như “Giả định số đầu tiên là lớn nhất” và “So sánh với số tiếp theo” thuộc về thành phần nào của tư duy máy tính?"
      }
    ],
    "choices": [
      "Trừu tượng hóa (Abstraction)",
      "Thiết kế thuật toán (Algorithm Design)",
      "Nhận dạng mẫu (Pattern Recognition)",
      "Phân rã (Decomposition)"
    ],
    "answerIndex": 1
  },
  {
    "id": "Q2",
    "title": "Question 2",
    "blocks": [
      {
        "type": "p",
        "text": "Thành phần nào của Tư duy tính toán nhấn mạnh việc ẩn đi chi tiết cụ thể và thiết kế hàm tổng quát có thể dùng cho nhiều trường hợp bằng cách nhận tham số (ví dụ: add_numbers(a,b))?"
      }
    ],
    "choices": [
      "Trừu tượng hóa (Abstraction)",
      "Thiết kế thuật toán (Algorithm Design)",
      "Nhận dạng mẫu (Pattern Recognition)",
      "Phân rã (Decomposition)"
    ],
    "answerIndex": 0
  },
  {
    "id": "Q3",
    "title": "Question 3",
    "blocks": [
      {
        "type": "p",
        "text": "Hiện tượng “Hallucination” (Ảo giác) của AI trong lập trình được định nghĩa như thế nào?"
      }
    ],
    "choices": [
      "Khi AI yêu cầu người dùng giải thích rõ để xem mã nguồn đúng",
      "Khi AI tự tin đưa ra các thông tin sai lệch hoặc không có thực",
      "Khi AI từ chối trả lời các câu hỏi quá phức tạp",
      "Khi tốc độ phản hồi của AI bị chậm do nghẽn mạng"
    ],
    "answerIndex": 1
  },
  {
    "id": "Q4",
    "title": "Question 4",
    "blocks": [
      {
        "type": "p",
        "text": "Một prompt tốt theo chiến lược chuyên nghiệp thường bao gồm các thành phần nào sau đây?"
      }
    ],
    "choices": [
      "Tên người dùng, Địa chỉ email, Mật khẩu, Câu hỏi",
      "Khen ngợi AI, Yêu cầu viết nhanh, Không dùng dấu câu",
      "Chỉ cần một từ khóa duy nhất để AI tự hiểu",
      "Vai trò (Role), Mục tiêu (Objective), Quy tắc (Rules), Đối tượng (Audience)"
    ],
    "answerIndex": 3
  },
  {
    "id": "Q5",
    "title": "Question 5",
    "blocks": [
      {
        "type": "p",
        "text": "Phát biểu nào sau đây đúng về biến cục bộ (local variable) trong Python?"
      }
    ],
    "choices": [
      "Có thể được truy cập trực tiếp từ bên ngoài hàm bằng tên của nó.",
      "Chỉ tồn tại trong suốt quá trình thực thi của hàm mà nó được khai báo.",
      "Được khai báo bên ngoài tất cả các hàm và có thể truy cập ở bất cứ đâu.",
      "Tự động trở thành biến toàn cục nếu hàm được gọi nhiều lần."
    ],
    "answerIndex": 1
  },
  {
    "id": "Q6",
    "title": "Question 6",
    "blocks": [
      {
        "type": "p",
        "text": "Sự khác biệt cốt lõi trong cách thực thi giữa một chuỗi các câu lệnh if riêng rẽ và một cấu trúc if-elif-else là gì?"
      }
    ],
    "choices": [
      "Không có khác biệt về chức năng; chỉ là hai cách viết khác nhau cho cùng một logic.",
      "Một chuỗi các if sẽ đánh giá từng điều kiện độc lập, còn if-elif-else sẽ dừng lại ngay khi gặp điều kiện đúng đầu tiên.",
      "Một chuỗi các if hiệu quả hơn vì không có “chi phí” kiểm tra elif.",
      "Cấu trúc if-elif-else bắt buộc phải có khối else, còn chuỗi if thì không cần."
    ],
    "answerIndex": 1
  },
  {
    "id": "Q7",
    "title": "Question 7",
    "blocks": [
      {
        "type": "p",
        "text": "Xét cấu trúc if-elif-else sau với score = 85. Nếu Python bắt đầu kiểm tra các điều kiện với score = 85, thì điều gì xảy ra sau khi khối lệnh elif score >= 70 được thực thi?"
      },
      {
        "type": "pre",
        "text": "score = 85\nif score >= 90:\nprint(\"Excellent!\")\nelif score >= 70:\nprint(\"Good␣job!\")\nelif score >= 50:\nprint(\"Pass.\")\nelse:\nprint(\"Fail.\")"
      }
    ],
    "choices": [
      "Khi Python tìm thấy một biểu thức Boolean đúng (ví dụ score >= 70), nó sẽ thực thi khối lệnh tương ứng, rồi bỏ qua toàn bộ các khối elif và else còn lại.",
      "Python vẫn tiếp tục kiểm tra điều kiện elif score >= 50 và cũng in ra “Pass.”, sau đó bỏ qua else.",
      "Khối else chỉ được thực thi nếu tất cả các biểu thức Boolean khác (bao gồm if và mọi elif) đều là False.",
      "Python chỉ thực thi các câu lệnh trong khối đầu tiên if score >= 90; vì đó là khối được kiểm tra đầu tiên."
    ],
    "answerIndex": 0
  },
  {
    "id": "Q8",
    "title": "Question 8",
    "blocks": [
      {
        "type": "p",
        "text": "Xét đoạn mã sau, kết quả in ra là gì?"
      },
      {
        "type": "pre",
        "text": "def tricky(a):\nb = a\na = a + [10]\nb += [20]"
      },
      {
        "type": "p",
        "text": "a.append(30)"
      },
      {
        "type": "pre",
        "text": "return a, b\nx = [1, 2]"
      },
      {
        "type": "p",
        "text": "p, q = tricky(x)"
      },
      {
        "type": "pre",
        "text": "print(\"x␣=\", x)\nprint(\"p␣=\", p)\nprint(\"q␣=\", q)\nprint(\"x␣is␣q:\", x is q)\nprint(\"x␣is␣p:\", x is p)"
      }
    ],
    "choices": [
      "x=[1,2,20], p=[1,2,10,20,30], q=[1,2,10,20,30], x is q=True, x is p=True",
      "x=[1,2,20], p=[1,2,10,30], q=[1,2,20], x is q=True, x is p=False",
      "x=[1,2,20], p=[1,2,10,30], q=[1,2,10,30], x is q=False, x is p=False",
      "x=[1,2], p=[1,2,10,30], q=[1,2,20], x is q=False, x is p=False"
    ],
    "answerIndex": 1
  },
  {
    "id": "Q9",
    "title": "Question 9",
    "blocks": [
      {
        "type": "p",
        "text": "Xét đoạn mã sau, kết quả in ra là gì?"
      },
      {
        "type": "pre",
        "text": "def g(nums):\nnums = nums + [99]"
      },
      {
        "type": "p",
        "text": "nums[0] += 1"
      },
      {
        "type": "pre",
        "text": "lst = [6, 0, 7]"
      },
      {
        "type": "p",
        "text": "g(lst)"
      },
      {
        "type": "pre",
        "text": "print(lst)"
      }
    ],
    "choices": [
      "[7, 0, 7]",
      "[6, 0, 7]",
      "[7, 0, 7, 99]",
      "[6, 0, 7, 99]"
    ],
    "answerIndex": 1
  },
  {
    "id": "Q10",
    "title": "Question 10",
    "blocks": [
      {
        "type": "p",
        "text": "Xét đoạn mã sau:"
      },
      {
        "type": "pre",
        "text": "x = 10\ndef my_func():\nx = 5"
      },
      {
        "type": "p",
        "text": "my_func()"
      },
      {
        "type": "pre",
        "text": "print(x)"
      },
      {
        "type": "p",
        "text": "Giá trị in ra là bao nhiêu và tại sao?"
      }
    ],
    "choices": [
      "5, vì hàm đã thay đổi giá trị của biến toàn cục",
      "10, vì việc gán x=5 bên trong hàm tạo ra một biến cục bộ mới",
      "15, vì Python cộng dồn các giá trị trùng tên",
      "Lỗi UnboundLocalError"
    ],
    "answerIndex": 1
  },
  {
    "id": "Q11",
    "title": "Question 11",
    "blocks": [
      {
        "type": "p",
        "text": "Một quy tắc cơ bản về key (khóa) trong dictionary của Python là gì?"
      }
    ],
    "choices": [
      "Key bắt buộc phải là chuỗi (string).",
      "Key không cần duy nhất miễn là value khác nhau.",
      "Key có thể là mọi kiểu dữ liệu, kể cả list.",
      "Key phải duy nhất và thuộc kiểu bất biến (có thể băm / hashable)."
    ],
    "answerIndex": 3
  },
  {
    "id": "Q12",
    "title": "Question 12",
    "blocks": [
      {
        "type": "p",
        "text": "Cho đoạn mã sau:"
      },
      {
        "type": "pre",
        "text": "s = set([1,2,2,3,3,3])\nprint(len(s))"
      },
      {
        "type": "p",
        "text": "Kết quả in ra màn hình là bao nhiêu?"
      }
    ],
    "choices": [
      "2",
      "6",
      "1",
      "3"
    ],
    "answerIndex": 3
  },
  {
    "id": "Q13",
    "title": "Question 13",
    "blocks": [
      {
        "type": "p",
        "text": "Trong thuật toán Insertion Sort, ở vòng lặp thứ i (bắt đầu từ i = 1), chúng ta có thể khẳng định điều gì về mảng con từ chỉ số 0 đến i?"
      }
    ],
    "choices": [
      "Phần tử ở chỉ số i là phần tử lớn nhất trong mảng con này.",
      "Mảng con này không thay đổi gì so với mảng ban đầu.",
      "Mảng con này chứa các phần tử nhỏ nhất của toàn bộ mảng ban đầu.",
      "Mảng con này đã được sắp xếp đúng thứ tự tương đối của các phần tử đã xét."
    ],
    "answerIndex": 3
  },
  {
    "id": "Q14",
    "title": "Question 14",
    "blocks": [
      {
        "type": "p",
        "text": "Cho mảng [30, 11, 70, 45, 41], trạng thái của mảng sẽ là gì sau khi hoàn thành vòng lặp (pass/iteration) đầu tiên của thuật toán Bubble Sort?"
      }
    ],
    "choices": [
      "[11, 30, 41, 45, 70]",
      "[11, 30, 45, 41, 70]",
      "[30, 11, 45, 41, 70]",
      "[11, 30, 70, 45, 41]"
    ],
    "answerIndex": 1
  },
  {
    "id": "Q15",
    "title": "Question 15",
    "blocks": [
      {
        "type": "p",
        "text": "Trong Python, mọi lớp bạn tự định nghĩa (ví dụ: class MyClass:) thực chất đều kế thừa từ lớp nào nếu không chỉ định lớp cha?"
      }
    ],
    "choices": [
      "Lớp object",
      "Nó không kế thừa từ bất kỳ lớp nào (cấp độ gốc).",
      "Lớp type",
      "Lớp NoneType"
    ],
    "answerIndex": 0
  },
  {
    "id": "Q16",
    "title": "Question 16",
    "blocks": [
      {
        "type": "p",
        "text": "Giả sử lớp C kế thừa từ lớp B, và B kế thừa từ lớp A. Nếu obj là một thực thể của lớp C, kết quả của isinstance(obj, A) là gì?"
      }
    ],
    "choices": [
      "TypeError, vì không thể so sánh đối tượng lớp con với lớp tổ tiên xa.",
      "True, vì một đối tượng là thực thể của lớp nó và tất cả các lớp cha/tổ tiên của nó.",
      "None, vì kết quả phụ thuộc vào việc lớp A có ghi đè phương thức khởi tạo hay không.",
      "False, vì obj chỉ là thực thể của lớp C."
    ],
    "answerIndex": 1
  },
  {
    "id": "Q17",
    "title": "Question 17",
    "blocks": [
      {
        "type": "p",
        "text": "Kết quả có khả năng xảy ra nhất khi chạy bad_blast_off_v1(5) là gì?"
      },
      {
        "type": "pre",
        "text": "def bad_blast_off_v1(n):\nif n == 0:\nprint(\"BLAST␣OFF!\")\nelse:\nprint(n)"
      },
      {
        "type": "p",
        "text": "bad_blast_off_v1(n) bad_blast_off_v1(5)"
      }
    ],
    "choices": [
      "Nó sẽ gây lỗi RecursionError ngay lập tức.",
      "Nó sẽ in ra “BLAST OFF!” ngay lập tức.",
      "Nó sẽ in ra “5” lặp đi lặp lại cho đến khi xảy ra lỗi RecursionError.",
      "Nó sẽ in ra đếm ngược từ 5 đến 1 rồi in “BLAST OFF!”."
    ],
    "answerIndex": 2
  },
  {
    "id": "Q18",
    "title": "Question 18",
    "blocks": [
      {
        "type": "p",
        "text": "Sự khác biệt cơ bản giữa SyntaxError và một ngoại lệ lúc chạy (runtime exception) như ValueError trong Python là gì?"
      }
    ],
    "choices": [
      "SyntaxError chỉ xảy ra khi dùng sai toán tử, còn ValueError liên quan đến xử lý tệp.",
      "SyntaxError được bộ phân tích cú pháp (parser) phát hiện trước khi chương trình bắt đầu chạy, còn ValueError xảy ra trong quá trình chương trình đang chạy.",
      "SyntaxError có thể được xử lý bằng try-except, còn ValueError thì luôn làm chương trình bị crash.",
      "SyntaxError và ValueError là hai tên gọi cho cùng một loại lỗi."
    ],
    "answerIndex": 1
  },
  {
    "id": "Q19",
    "title": "Question 19",
    "blocks": [
      {
        "type": "p",
        "text": "Nếu bạn mở một tệp đã có sẵn nội dung bằng chế độ 'w', điều gì sẽ xảy ra?"
      }
    ],
    "choices": [
      "Nội dung hiện có của tệp sẽ bị xóa sạch hoàn toàn trước khi ghi nội dung mới.",
      "Nội dung mới sẽ được thêm vào cuối tệp, giữ nguyên nội dung cũ.",
      "Python sẽ phát sinh lỗi FileExistsError để tránh mất dữ liệu ngoài ý muốn.",
      "Nội dung mới sẽ được thêm vào cuối tệp, giữ nguyên nội dung cũ."
    ],
    "answerIndex": 0
  },
  {
    "id": "Q20",
    "title": "Question 20",
    "blocks": [
      {
        "type": "p",
        "text": "Phân tích đoạn code sau. Nội dung cuối cùng của log.txt sẽ là gì sau khi script chạy xong? with open('log.txt', 'w') as f: f.write('init\\n') with open('log.txt', 'a') as f: f.write('update\\n') with open('log.txt', 'w') as f: f.write('reset\\n')"
      }
    ],
    "choices": [
      "reset",
      "init reset",
      "Chương trình sẽ báo lỗi vì tệp được mở nhiều lần.",
      "init update reset"
    ],
    "answerIndex": 0
  },
  {
    "id": "Q21",
    "title": "Question 21",
    "blocks": [
      {
        "type": "p",
        "text": "Xét đoạn mã sau, kết quả là gì?"
      },
      {
        "type": "pre",
        "text": "x = 10\ndef f():\nx = x + 1"
      },
      {
        "type": "p",
        "text": "f()"
      },
      {
        "type": "pre",
        "text": "print(x)"
      }
    ],
    "choices": [
      "UnboundLocalError",
      "NameError",
      "11",
      "10"
    ],
    "answerIndex": 0
  },
  {
    "id": "Q22",
    "title": "Question 22",
    "blocks": [
      {
        "type": "p",
        "text": "Xét đoạn mã sau, kết quả là gì?"
      },
      {
        "type": "pre",
        "text": "x = 10\ndef f():"
      },
      {
        "type": "p",
        "text": "global x"
      },
      {
        "type": "pre",
        "text": "x = x + 1"
      },
      {
        "type": "p",
        "text": "f()"
      },
      {
        "type": "pre",
        "text": "print(x)"
      }
    ],
    "choices": [
      "11",
      "NameError",
      "UnboundLocalError",
      "10"
    ],
    "answerIndex": 0
  },
  {
    "id": "Q23",
    "title": "Question 23",
    "blocks": [
      {
        "type": "p",
        "text": "Xét đoạn mã sau, kết quả in ra là gì?"
      },
      {
        "type": "pre",
        "text": "def g(a, b):\na += 1"
      },
      {
        "type": "p",
        "text": "b.append(1)"
      },
      {
        "type": "pre",
        "text": "x = 0\ny = []"
      },
      {
        "type": "p",
        "text": "g(x, y)"
      },
      {
        "type": "pre",
        "text": "print(x, y)"
      }
    ],
    "choices": [
      "1 [1]",
      "0 [1]",
      "0 []",
      "1 []"
    ],
    "answerIndex": 1
  },
  {
    "id": "Q24",
    "title": "Question 24",
    "blocks": [
      {
        "type": "p",
        "text": "Dựa trên thứ tự ưu tiên toán tử trong Python, biểu thức sau gán cho biến result sẽ cho ra giá trị gì?"
      },
      {
        "type": "pre",
        "text": "result = 1.1 + 2.2 == 3.3 and 10 / 3 == 3 and not False"
      }
    ],
    "choices": [
      "None",
      "True",
      "Lỗi (Error)",
      "False"
    ],
    "answerIndex": 3
  },
  {
    "id": "Q25",
    "title": "Question 25",
    "blocks": [
      {
        "type": "p",
        "text": "Xét đoạn mã sau, kết quả in ra là gì?"
      },
      {
        "type": "pre",
        "text": "s = \"hi\"\nt = s\ns += \"!\"\nprint(s, t)"
      }
    ],
    "choices": [
      "Báo lỗi vì không thể cộng chuỗi",
      "hi! hi!",
      "hi! hi",
      "hi hi!"
    ],
    "answerIndex": 2
  },
  {
    "id": "Q26",
    "title": "Question 26",
    "blocks": [
      {
        "type": "p",
        "text": "Xét đoạn mã sau, output là gì?"
      },
      {
        "type": "pre",
        "text": "def add_one(v, arr=[]):"
      },
      {
        "type": "p",
        "text": "arr.append(v)"
      },
      {
        "type": "pre",
        "text": "return arr\nprint(add_one(1))\nprint(add_one(2))\nprint(add_one(3, []))"
      }
    ],
    "choices": [
      "[1] [2] [3]",
      "[1] [2] []",
      "Lỗi vì arr là list",
      "[1] [1, 2] [3]"
    ],
    "answerIndex": 3
  },
  {
    "id": "Q27",
    "title": "Question 27",
    "blocks": [
      {
        "type": "p",
        "text": "Xét đoạn mã sau và chọn output đúng:"
      },
      {
        "type": "pre",
        "text": "a = [1, 2]\nb = a\na = a + [3]\np = (a == b, id(a) == id(b), b)\na = [1, 2]\nb = a\na += [3]\nq = (a == b, id(a) == id(b), b)\nprint(p)\nprint(q)"
      }
    ],
    "choices": [
      "(True, True, [1, 2, 3]) (True, True, [1, 2, 3])",
      "(False, True, [1, 2]) (True, False, [1, 2, 3])",
      "(False, False, [1, 2]) (True, True, [1, 2, 3])",
      "(True, False, [1, 2]) (True, True, [1, 2, 3])"
    ],
    "answerIndex": 2
  },
  {
    "id": "Q28",
    "title": "Question 28",
    "blocks": [
      {
        "type": "p",
        "text": "Cho hàm đệ quy sau, output là gì?"
      },
      {
        "type": "pre",
        "text": "def f(n):\nif n == 0:\nreturn\nprint(\"A\", n)"
      },
      {
        "type": "p",
        "text": "f(n-1)"
      },
      {
        "type": "pre",
        "text": "print(\"B\", n)"
      },
      {
        "type": "p",
        "text": "f(3)"
      }
    ],
    "choices": [
      "A 3, B 3, A 2, B 2, A 1, B 1",
      "Lỗi",
      "A 3, A 2, A 1, B 1, B 2, B 3",
      "A 1, A 2, A 3, B 3, B 2, B 1"
    ],
    "answerIndex": 2
  },
  {
    "id": "Q29",
    "title": "Question 29",
    "blocks": [
      {
        "type": "p",
        "text": "Cho hàm sau:"
      },
      {
        "type": "pre",
        "text": "def g(n):\nif n == 0:\nreturn 1\nreturn g(n-1) + g(n-1)\nprint(g(4))"
      },
      {
        "type": "p",
        "text": "Kết quả và số lần gọi g là bao nhiêu?"
      }
    ],
    "choices": [
      "8 và 15 lần",
      "16 và 15 lần",
      "16 và 31 lần",
      "32 và 31 lần"
    ],
    "answerIndex": 2
  },
  {
    "id": "Q30",
    "title": "Question 30",
    "blocks": [
      {
        "type": "p",
        "text": "Cho hàm sau:"
      },
      {
        "type": "pre",
        "text": "def h(n, path=[]):"
      },
      {
        "type": "p",
        "text": "path.append(n)"
      },
      {
        "type": "pre",
        "text": "if n == 0:\nreturn path\nreturn h(n-1, path)\nprint(h(3))\nprint(h(2))"
      },
      {
        "type": "p",
        "text": "Output đúng là gì?"
      }
    ],
    "choices": [
      "[3, 2, 1, 0] [3, 2, 1, 0, 2, 1, 0]",
      "[3, 2, 1, 0] [3, 2, 1, 0]",
      "[3, 2, 1, 0] [2, 1, 0]",
      "Báo lỗi RecursionError"
    ],
    "answerIndex": 0
  },
  {
    "id": "Q31",
    "title": "Question 31",
    "blocks": [
      {
        "type": "p",
        "text": "Một script Python bị lỗi SyntaxError: expected ':'. Lỗi này xảy ra ở giai đoạn nào trong vòng đời của script?"
      }
    ],
    "choices": [
      "Sau khi chương trình chạy xong, trong giai đoạn dọn dẹp (cleanup).",
      "Chỉ xảy ra khi một hàm cụ thể chứa lỗi được gọi.",
      "Trước khi chương trình chạy, trong giai đoạn phân tích cú pháp (parsing).",
      "Trong quá trình chương trình chạy, khi dòng bị lỗi được thực thi."
    ],
    "answerIndex": 2
  },
  {
    "id": "Q32",
    "title": "Question 32",
    "blocks": [
      {
        "type": "p",
        "text": "Xét đoạn code sau, kết quả print(C().v) là gì?"
      },
      {
        "type": "pre",
        "text": "class P:\ndef __init__(self):"
      },
      {
        "type": "p",
        "text": "self.v = 1"
      },
      {
        "type": "pre",
        "text": "class C(P):\ndef __init__(self):"
      },
      {
        "type": "p",
        "text": "self.v = 2 super().__init__()"
      },
      {
        "type": "pre",
        "text": "print(C().v)"
      }
    ],
    "choices": [
      "Lỗi",
      "2",
      "1",
      "None"
    ],
    "answerIndex": 2
  },
  {
    "id": "Q33",
    "title": "Question 33",
    "blocks": [
      {
        "type": "p",
        "text": "Xét đoạn code sau, chọn đáp án đúng nhất:"
      },
      {
        "type": "pre",
        "text": "def mystery_sort(a):\nn = len(a)\nfor i in range(n - 1):\nswapped = False\nfor j in range(n - 1 - i):\nif a[j] > a[j + 1]:"
      },
      {
        "type": "p",
        "text": "a[j], a[j + 1] = a[j + 1], a[j]"
      },
      {
        "type": "pre",
        "text": "swapped = True\nif not swapped:"
      },
      {
        "type": "p",
        "text": "break"
      },
      {
        "type": "pre",
        "text": "return a\ndata = [(2, \"A\"), (1, \"X\"), (2, \"B\"), (1, \"Y\")]\nprint(mystery_sort(data))"
      }
    ],
    "choices": [
      "Đây là bubble sort (có early-exit), ổn định, output: [(1,'X'),(1,'Y'),(2,'A'),(2,'B')]",
      "Đây là insertion sort, ổn định, output: [(1,'Y'),(1,'X'),(2,'A'),(2,'B')]",
      "Đây là quick sort, không ổn định, output: [(1,'X'),(1,'Y'),(2,'B'),(2,'A')]",
      "Đây là selection sort, không ổn định, output: [(1,'Y'),(1,'X'),(2,'B'),(2,'A')]"
    ],
    "answerIndex": 0
  },
  {
    "id": "Q34",
    "title": "Question 34",
    "blocks": [
      {
        "type": "p",
        "text": "Xét đoạn code sau, chọn đúng nhất:"
      },
      {
        "type": "pre",
        "text": "def bubble(a):\nn = len(a)\nfor i in range(n-1):\nfor j in range(n-1-i):\nif a[j] >= a[j+1]:"
      },
      {
        "type": "p",
        "text": "a[j], a[j+1] = a[j+1], a[j]"
      },
      {
        "type": "pre",
        "text": "return a\ndata = [(1,\"A\"), (1,\"B\"), (1,\"C\")]\nprint(bubble(data))"
      }
    ],
    "choices": [
      "Vẫn ổn định, output giữ A,B,C",
      "Không ổn định, có thể đảo thứ tự A,B,C",
      "Output luôn là [(1,'C'),(1,'B'),(1,'A')]",
      "Lỗi vì tuple không so sánh được"
    ],
    "answerIndex": 0
  }
];
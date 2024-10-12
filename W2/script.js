function login() {
  // Lấy thông tin đăng nhập từ người dùng
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  // Lấy thông tin đã lưu trong LocalStorage
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  // Kiểm tra nếu thông tin đăng nhập đúng
  if (username === storedUsername && password === storedPassword) {
    window.location.href = "trangchu.html";
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.");
  }
}

function register() {
  // Lấy thông tin đăng ký từ các ô input
  const username = document.getElementById("tk").value;
  const password = document.getElementById("mk").value;

  // Kiểm tra nếu người dùng đã nhập đủ thông tin
  if (username && password) {
    // Lưu thông tin đăng ký vào LocalStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Đăng ký thành công! Bạn có thể đăng nhập.");
    // Chuyển hướng đến trang đăng nhập
    window.location.href = "index.html";
  } else {
    alert("Vui lòng nhập đầy đủ thông tin.");
  }
}

function showmk() {
  const txt_mk = document.getElementById("mk");
  txt_mk.type = txt_mk.type === "password" ? "text" : "password";
}

function showmk_xn() {
  const txt_xn_mk = document.getElementById("txt_xn_mk");
  txt_xn_mk.type = txt_xn_mk.type === "password" ? "text" : "password";
}

function validateInput(event) {
  let input = event.target.value;
  input = input.replace(/[^0-9]/g, "");
  if (input.length > 10) {
    input = input.slice(0, 10);
  }
  event.target.value = input;
}

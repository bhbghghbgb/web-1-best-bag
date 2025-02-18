// Duong Ngoc Le
let username = document.getElementById("username");
let password = document.getElementById("password");
let btnLogin = document.querySelector(".btn-login");
var regExpUser = /^[A-Za-z0-9_\.]{6,32}$/;
var regExpPass = /^([A-Z]){1}([\w_\.!@#$%^&*()]+){5,31}$/;
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  if (!username.value || !password.value) {
    alert("Vui lòng nhập đầy đủ thông tin");
  } else {
    if (!regExpUser.test(username.value)) {
      alert(
        "UserName không hợp lệ ! Username bao gồm các ký tự chữ cái, chữ số, dấu gạch dưới, dấu chấm Độ dài 6-32 ký tự"
      );
    }

    if (!regExpPass.test(password.value)) {
      alert(
        "Mật khẩu không hợp lệ ! Mật khẩu bao gồm các ký chữ cái, chữ số, ký tự đặc biệt, dấu chấm. Bắt đầu bằng ký tự in hoa. Độ dài 6-32 ký tự"
      );
    }

    let data = JSON.parse(localStorage.getItem(username.value));
    if (data == null) {
      alert("Sai thông tin đăng nhập");
    }
    console.log(data.username);
    console.log(data.password);
    var tk = data.username;
    var mk = data.password;

    if (
      tk == username.value &&
      mk == password.value &&
      regExpUser.test(username.value) &&
      regExpPass.test(password.value)
    ) {
      alert("Đăng nhập thành công");
      window.location.href = "index.html";
    } else {
      alert("Sai thông tin đăng nhập");
    }
  }
});

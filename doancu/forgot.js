// Duong Ngoc Le
let email = document.getElementById("email");
let username = document.getElementById("username");
let emailcf = document.getElementById("emailcf");
let password = document.getElementById("password");
let btnforgot = document.querySelector(".btn-forgot");
var regExpPass = /^([A-Z]){1}([\w_\.!@#$%^&*()]+){5,31}$/;
var regExpEmail = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
var regExpUser = /^[A-Za-z0-9_\.]{6,32}$/;
btnforgot.addEventListener("click", (e) => {
  e.preventDefault();
  if (!email.value || !username.value) {
    alert("Vui lòng nhập đầy đủ thông tin");
  }
  else {
    if (!regExpUser.test(username.value)) {
      alert("UserName không hợp lệ ! Username bao gồm các ký tự chữ cái, chữ số, dấu gạch dưới, dấu chấm Độ dài 6-32 ký tự")
    }

    if (!regExpEmail.test(email.value)) {
      alert("Định dạng email sai");
    }

    let data = JSON.parse(localStorage.getItem(username.value));
    if (data == null) {
      alert("Sai thông tin");
    }
    console.log(data.username);
    console.log(data.email);
    var tk = data.username;
    var em = data.email;

    if (tk == username.value && em == email.value
      && regExpUser.test(username.value) && regExpEmail.test(email.value)) {
      var passwordnew = prompt("Nhập mật khẩu mới", "D123123");

      if (!regExpPass.test(passwordnew)) {
        alert("Mật khẩu không hợp lệ ! Mật khẩu bao gồm các ký chữ cái, chữ số, ký tự đặc biệt, dấu chấm. Bắt đầu bằng ký tự in hoa. Độ dài 6-32 ký tự");
      }
      else {
        let user = {
          username: username.value,
          password: passwordnew,
          email: email.value,
        };
        localStorage.setItem(username.value, JSON.stringify(user));
        alert("Thành công")
      }
    }
    else {
      alert("Sai thông tin");
    }

  }

});
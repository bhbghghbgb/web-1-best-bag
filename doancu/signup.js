// Duong Ngoc Le
let username = document.getElementById("username");
let email = document.getElementById("email");
let emailcf = document.getElementById("emailcf");
let password = document.getElementById("password");
let passwordcf = document.getElementById("passwordcf");

let btnSignup = document.querySelector(".btn-signup");
var regExpEmail = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
var regExpUser = /^[A-Za-z0-9_\.]{6,32}$/;
var regExpPass = /^([A-Z]){1}([\w_\.!@#$%^&*()]+){5,31}$/;

 var check = "0";
document.getElementById('checkbox1').onclick = function (e) {
  if (this.checked) {
    check = "1";
  }
  else {
     check = "0";
  }
};

btnSignup.addEventListener("click", (e) => {
  e.preventDefault();
  
  let user = {
    username: username.value,
    password: password.value,
    email: email.value,
  };

  let json = JSON.stringify(user);

  if (!username.value || !email.value || !password.value || !passwordcf.value) {
    alert("Vui lòng nhập đầy đủ thông tin");
  }

  else {
    
    if (!regExpUser.test(username.value)) {
      alert("UserName không hợp lệ ! Username bao gồm các ký tự chữ cái, chữ số, dấu gạch dưới, dấu chấm Độ dài 6-32 ký tự")
    }
    let data = JSON.parse(localStorage.getItem(username.value));
    if (data != null) {
      alert("Username tồn tại");
    } 
   else  
    {
      if (!regExpEmail.test(email.value)) {
      alert("Không đúng định dạng Email")
    }
    if (email.value != emailcf.value) {
      alert("Email nhập lại không trùng khớp");
    }
    if (!regExpPass.test(password.value)) {
      alert("Mật khẩu không hợp lệ ! Mật khẩu bao gồm các ký chữ cái, chữ số, ký tự đặc biệt, dấu chấm. Bắt đầu bằng ký tự in hoa. Độ dài 6-32 ký tự")
    }
    if (password.value != passwordcf.value) {
      alert("Mật khẩu nhập lại không trùng khớp");

    }
     if (check == "0")
     {
      alert("Vui lòng đồng ý với điều khoản");
     }
   
    if (check == "1" && password.value == passwordcf.value && regExpUser.test(username.value) && regExpEmail.test(email.value) && regExpPass.test(password.value) && email.value == emailcf.value) {
      localStorage.setItem(username.value, json);
      alert("Đăng ký thành công");
    }
  }
  }
});




function SignIn() {


  const emailOrUserNameField = document.getElementById("emailOrUsernameField");
  const passwordField = document.getElementById("password_signin");

  const emailOrUsernameValue = emailOrUserNameField.value;
  const passwordValue = passwordField.value;

  const userEntity = timNguoiDung(emailOrUsernameValue.trim());
  if (userEntity) {
    if (userEntity.password === passwordValue) {
      alert("Login success");
      localStorage.setItem("currentUserId", userEntity.id);
    }
  } else {
    alert("Login failed: Username or password is incorrect");
  }

  window.location = "./index.html";
}

window.addEventListener("load", () => {
  taiDuLieuTongMainJs(() => taiNguoiDung(() => {

    const signInForm = document.getElementById("signInForm");
    signInForm.addEventListener("submit", (event) => {
      event.preventDefault();
      SignIn();
    });
  }))
})


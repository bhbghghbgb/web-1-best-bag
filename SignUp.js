function SignUp() {


  const name = document.getElementById("name");
  const username = document.getElementById("username");
  const passwordField = document.getElementById("password_signup");
  const email = document.getElementById("email");

  const usernameValue = username.value;
  const passwordValue = passwordField.value;
  const emailValue = email.value;
  const nameValue = name.value;



  themNguoiDung(null, {
    name: nameValue,
    username: usernameValue,
    password: passwordValue,
    email: emailValue,
  });

  const userEntity = timNguoiDung(usernameValue.trim());
  if (userEntity) {
    if (userEntity.password === passwordValue) {
      alert("Sign up success");
    }
  } else {
    alert("Sign up failed: Username or password is incorrect");
  }

  const signInButton = document.getElementById("signInSlide");
  signInButton.click();

}

window.addEventListener("load", () => {
  taiDuLieuTongMainJs(() => taiNguoiDung(() => {

    const signUpForm = document.getElementById("signUpForm");
    signUpForm.addEventListener("submit", (event) => {
      event.preventDefault();
      SignUp();
    });

  }))
})


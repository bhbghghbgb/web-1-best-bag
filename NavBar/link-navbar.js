
document.getElementById('navbar-sidebar-inject')
    .insertAdjacentHTML('afterbegin', `<div class="navbar-placeholder" id="navbar-placeholder" data-sidebar-collapsed>Navbar</div> `)
function watchNavbarBg() {
    if ((window.pageYOffset < 64 && watchNavbarBg.active === false)
        || (window.pageYOffset >= 64 && watchNavbarBg.active === true)) {
        return;
    }
    if (watchNavbarBg.active === false) {
        watchNavbarBg.active = true;
        document.querySelector('#navbar-placeholder .navbar').classList.add('navbar-scrolleddown');
        return;
    }
    watchNavbarBg.active = false;
    document.querySelector('#navbar-placeholder .navbar').classList.remove('navbar-scrolleddown');
}

function showLogOutDialog() {
    const existingDialog = document.getElementById("logoutDialog");
    if (existingDialog) {
      existingDialog.showModal();
      return;
    }
  }
  
  function showLoginDialog() {
    // Sliding panel script
    const signUpButton = document.getElementById("signUpSlide");
    const signInButton = document.getElementById("signInSlide");
    const container = document.getElementById("login-container");
  
    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });
  
    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  
    
  
    // Show/Hide password script
    const showPasswordCheckboxSignIn = document.getElementById("showPasswordCheckboxSignIn");
    const showPasswordCheckboxSignUp = document.getElementById("showPasswordCheckboxSignUp");
    const passwordFieldSignIn = document.getElementById("password_signin");
    const passwordFieldSignUp = document.getElementById("password_signup");
  
    showPasswordCheckboxSignIn.addEventListener("change", () => {
      passwordFieldSignIn.type = showPasswordCheckboxSignIn.checked ? "text" : "password";
    });
  
    showPasswordCheckboxSignUp.addEventListener("change", () => {
      passwordFieldSignUp.type = showPasswordCheckboxSignUp.checked ? "text" : "password";
    });
  
    // URL parameter handling
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    if (status === "signup") {
      container.classList.add("right-panel-active");
    }
  
    // Form submission handlers
    const signUpForm = document.getElementById('signUpForm');
    const signInForm = document.getElementById('signInForm');
  
    signUpForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password_signup').value;
      console.log('Sign Up:', { username, name, email, password });
      // Add your sign-up logic here
    });
  
    signInForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const emailOrUsername = document.getElementById('emailOrUsernameField').value;
      const password = document.getElementById('password_signin').value;
      console.log('Sign In:', { emailOrUsername, password });
      // Add your sign-in logic here
    });
    const existingDialog = document.getElementById("loginDialog");
    if (existingDialog) {
      existingDialog.showModal();
      return;
    }
  }
  
  function dangXuat()
  {
    xoaDuLieuLocalStorage("currentUserId");
  }
  

watchNavbarBg.active = false;
fetch('/NavBar/navbar.html').then(request => request.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
        document.addEventListener('scroll', watchNavbarBg);
        const currentUserId = localStorage.getItem("currentUserId");
        if(currentUserId) {
          const thongTinNguoiDung = timNguoiDung(currentUserId);
          document.getElementById('navbar-right-non-login').remove();
          const navBarRight  = document.getElementById("navbar-right-logged-in");
          const userName = document.createElement("h3");
          const logoutButton=document.createElement("button");
          userName.innerText = thongTinNguoiDung["name"];
          logoutButton.innerText = "Đăng xuất";
          logoutButton.style="margin-left:8px;"
          navBarRight.appendChild(userName);
          navBarRight.appendChild(logoutButton);
          logoutButton.addEventListener("click", () => {
              dangXuat();
              window.location.reload();
          });
        } else {
          document.getElementById('navbar-right-logged-in').remove();
          const userIcon = document.getElementById("user-icon");
          userIcon.addEventListener("click", () => {
              showLoginDialog();
          });
        }
    });
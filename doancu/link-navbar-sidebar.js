// Huynh Gia Bao
document.getElementById('navbar-sidebar-inject')
    .insertAdjacentHTML('afterbegin', `<div class="navbar-placeholder" id="navbar-placeholder" data-sidebar-collapsed>Navbar</div>
<div class="sidebar-placeholder scrollbar-gray" id="sidebar-placeholder" data-sidebar-collapsed>Sidebar</div>
<div class="body-modal-overlay" id="body-modal-overlay" data-sidebar-collapsed></div>`)
function toggleOverlay() {
    document.getElementById('body-modal-overlay').toggleAttribute('data-sidebar-collapsed');
}
function toggleSidebar() {
    document.getElementById('sidebar-placeholder').toggleAttribute('data-sidebar-collapsed');
    toggleOverlay();
}
fetch('sidebar.html').then(request => request.text())
    .then(data => {
        document.getElementById('sidebar-placeholder').innerHTML = data;
        document.querySelector('#sidebar-placeholder .navbar-overlap .sidebar-close').addEventListener('click', toggleSidebar);
    });
window.addEventListener('keydown', e => {
    switch (e.key.toLowerCase()) {
        case "escape":
            toggleSidebar();
            break;
    }
});
document.getElementById('body-modal-overlay').addEventListener('click', toggleSidebar);
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
watchNavbarBg.active = false;
fetch('navbar.html').then(request => request.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
        document.querySelector('#navbar-placeholder .navbar .navbar-sidebar-open').addEventListener('click', toggleSidebar);
        document.addEventListener('scroll', watchNavbarBg);
    });
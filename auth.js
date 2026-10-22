// auth.js
(function () {
  const navAuth = document.getElementById("nav-auth");
  const navLogout = document.getElementById("nav-logout");
  if (!navAuth) return;

  const ten = localStorage.getItem("name");
  const dangNhap = localStorage.getItem("dangNhap") === "true";

  if (dangNhap && ten) {
    const chuCai = ten.trim().split(" ").pop().charAt(0).toUpperCase();
    navAuth.textContent = chuCai;
    navAuth.classList.add("nav-avatar");
    navAuth.href = "index.html";
    navAuth.title = ten;
    if (navLogout) navLogout.hidden = false;
    document.body.classList.add("da-dang-nhap");
  }

  if (navLogout) {
    navLogout.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("dangNhap");
      window.location.href = "index.html";
    });
  }
})();
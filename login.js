const thongBao= document.getElementById("thong-bao-dang-nhap")
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event)  => {

    event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("mat-khau").value;
thongBao.style.color = ""; // mặc định chữ đỏ (lỗi)
  // Kiểm tra bỏ trống
  if (email === "" || password === "") {
    thongBao.textContent = "Vui lòng nhập đầy đủ thông tin!";
    return;
  }  
 if (email === localStorage.getItem('email') && password === localStorage.getItem('password')) {
  localStorage.setItem("dangNhap", "true"); // đánh dấu đã đăng nhập cho index
    thongBao.style.color = "#2E5339";
    thongBao.textContent = "Đăng nhập thành công!";
    setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);

} else {
      thongBao.textContent = "Email hoặc mật khẩu không hợp lệ!";
    return;
}
})
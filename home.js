const salePro = document.getElementById("sale-list")
let saleProduct = danhSachSua.filter((p) => p.sale).slice(0,4)
saleProduct.forEach((sp) => {
salePro .innerHTML += `
    <div class="product-card">
          <div class="card-media">
           <span class="tag ${sp.giamGia ? 'tag-sale' : ''}">${sp.giamGia ? '-' + sp.giamGia + '%' : 'Bán chạy'}</span>
           <img src="${sp.img}" alt="${sp.ten}" loading="lazy" />
          </div>
          <div class="card-body">
            <div class="card-brand">${sp.hang}</div>
            <h3 class="card-title">${sp.ten}</h3>
            <p class="card-desc">${sp.moTa}</p>
            <div class="card-price-row">
  <div class="card-price">
    ${sp.giamGia
      ? `<span class="gia-moi">${sp.giaMoi.toLocaleString("vi-VN")}đ</span>
         <span class="gia-cu">${sp.gia.toLocaleString("vi-VN")}đ</span>`
      : `<span class="gia-moi">${sp.gia.toLocaleString("vi-VN")}đ</span>`}
    <span class="gia-donvi">/ ${sp.donVi}</span>
  </div>
</div>
            <div class="card-actions">
              <button class="btn btn-outline" type="button" onclick="window.location.href='detailproduct.html?id=${sp.id}'">Xem chi tiết</button>
              <button class="btn btn-primary" type="button" onclick="addToCart(${sp.id})">Thêm vào giỏ</button>
            </div>
          </div>
        </div>
`


})


const hotPro = document.getElementById("hot-list")
let hotProducts = danhSachSua.filter((p) => p.hot).slice(0,4)
hotProducts.forEach((sp) => {
 hotPro .innerHTML += `
    <div class="product-card">
          <div class="card-media">
           <span class="tag ${sp.giamGia ? 'tag-sale' : ''}">${sp.giamGia ? '-' + sp.giamGia + '%' : 'Bán chạy'}</span>
           <img src="${sp.img}" alt="${sp.ten}" loading="lazy" />
          </div>
          <div class="card-body">
            <div class="card-brand">${sp.hang}</div>
            <h3 class="card-title">${sp.ten}</h3>
            <p class="card-desc">${sp.moTa}</p>
            <div class="card-price-row">
  <div class="card-price">
    ${sp.giamGia
      ? `<span class="gia-moi">${sp.giaMoi.toLocaleString("vi-VN")}đ</span>
         <span class="gia-cu">${sp.gia.toLocaleString("vi-VN")}đ</span>`
      : `<span class="gia-moi">${sp.gia.toLocaleString("vi-VN")}đ</span>`}
    <span class="gia-donvi">/ ${sp.donVi}</span>
  </div>
</div>
            <div class="card-actions">
              <button class="btn btn-outline" type="button" onclick="window.location.href='detailproduct.html?id=${sp.id}'">Xem chi tiết</button>
              <button class="btn btn-primary" type="button" onclick="addToCart(${sp.id})">Thêm vào giỏ</button>
            </div>
          </div>
        </div>
`


})


const newPro = document.getElementById("new-list")
let newProducts = danhSachSua.filter((p) => p.hot).slice(0,4)
newProducts .forEach((sp) => {
 newPro  .innerHTML += `
    <div class="product-card">
          <div class="card-media">
           <span class="tag ${sp.giamGia ? 'tag-sale' : ''}">${sp.giamGia ? '-' + sp.giamGia + '%' : 'Bán chạy'}</span>
           <img src="${sp.img}" alt="${sp.ten}" loading="lazy" />
          </div>
          <div class="card-body">
            <div class="card-brand">${sp.hang}</div>
            <h3 class="card-title">${sp.ten}</h3>
            <p class="card-desc">${sp.moTa}</p>
            <div class="card-price-row">
  <div class="card-price">
    ${sp.giamGia
      ? `<span class="gia-moi">${sp.giaMoi.toLocaleString("vi-VN")}đ</span>
         <span class="gia-cu">${sp.gia.toLocaleString("vi-VN")}đ</span>`
      : `<span class="gia-moi">${sp.gia.toLocaleString("vi-VN")}đ</span>`}
    <span class="gia-donvi">/ ${sp.donVi}</span>
  </div>
</div>
            <div class="card-actions">
              <button class="btn btn-outline" type="button" onclick="window.location.href='detailproduct.html?id=${sp.id}'">Xem chi tiết</button>
              <button class="btn btn-primary" type="button" onclick="addToCart(${sp.id})">Thêm vào giỏ</button>
            </div>
          </div>
        </div>
`


})


// Nếu localStorage đã có tên thì đổi nút "Đăng ký" thành avatar
const navAuth = document.getElementById("nav-auth");
const navLogout = document.getElementById("nav-logout");
const tenDaLuu = localStorage.getItem("name");
const dangNhap = localStorage.getItem("dangNhap") === "true";

// Chỉ hiện avatar khi đã đăng nhập
if (dangNhap && tenDaLuu) {
  const chuCai = tenDaLuu.trim().split(" ").pop().charAt(0).toUpperCase();

  navAuth.textContent = chuCai;
  navAuth.classList.add("nav-avatar");
  navAuth.href = "index.html";
  navAuth.title = tenDaLuu;

  navLogout.hidden = false;                      // hiện nút đăng xuất
  document.body.classList.add("da-dang-nhap");   // CSS dựa vào class này để ẩn form
}

// ===== ĐĂNG XUẤT =====
navLogout.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("dangNhap"); // chỉ xóa cờ, giữ lại tài khoản
  window.location.reload();            // tải lại: avatar quay về "Đăng ký", form hiện lại
});


// ===== ĐÁNH GIÁ KHÁCH HÀNG (chạy vòng) =====
const danhSachDanhGia = [
  { ten: "Dương Tấn Khang", sao: 5, noiDung: "Đánh giá web" },
  { ten: "Nicola Hùng",     sao: 5, noiDung: "Đánh giá web" },
  { ten: "Bảo Thanh",       sao: 5, noiDung: "Đánh giá web" },
  { ten: "Gia Khiêm",       sao: 5, noiDung: "Đánh giá web" },
  { ten: "Quốc An",         sao: 5, noiDung: "Đánh giá web" },
  { ten: "Phùng Thanh Độ",  sao: 5, noiDung: "Đánh giá web" }
];

const reviewTrack = document.getElementById("review-track");
const reviewHTML = danhSachDanhGia.map((r) => {
  const chuCai = r.ten.trim().split(" ").pop().charAt(0).toUpperCase();
  const sao = "★".repeat(r.sao) + "☆".repeat(5 - r.sao);
  return `
    <div class="review-card">
      <div class="review-avatar">${chuCai}</div>
      <div class="review-info">
        <h3 class="review-name">${r.ten}</h3>
        <div class="review-stars">${sao}</div>
        <p class="review-text">${r.noiDung}</p>
      </div>
    </div>`;
}).join("");

// nhân đôi để chạy vòng liền mạch
reviewTrack.innerHTML = reviewHTML + reviewHTML;
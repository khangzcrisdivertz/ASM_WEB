
function hienThi (mang){
  let html = ""
   mang.forEach(function (sp) {
    html += `
      <div class="product-card">
        <div class="card-media">
          <span class="tag">Bán chạy</span>
         <img src="${sp.img}" alt="${sp.ten}" loading="lazy" />
        </div>
        <div class="card-body">
          <div class="card-brand">${sp.hang}</div>
          <h3 class="card-title">${sp.ten}</h3>
          <p class="card-desc">${sp.moTa}</p>
          <div class="card-price-row">
            <div class="card-price">${sp.gia.toLocaleString("vi-VN")}đ <span>/ ${sp.donVi}</span></div>
          </div>
          <div class="card-actions">
            <button class="btn btn-outline" type="button" onclick="window.location.href='detailproduct.html?id=${sp.id}'">Xem chi tiết</button>
            <button class="btn btn-primary" type="button" onclick="addToCart(${sp.id})">Thêm vào giỏ</button>
          </div>
        </div>
      </div>
    `;
  });

  document.getElementById("product-list").innerHTML = html;
}

// Lọc theo giá
document.getElementById("gia-all").addEventListener("click", () => {
    hienThi(danhSachSua);
})

    
  document.getElementById("gia-duoi30").addEventListener("click", () => {
  let ketQua = danhSachSua.filter((sp) => {
    return sp.gia < 30000;
  });
  hienThi(ketQua);
});

document.getElementById("gia-30-60").addEventListener("click", () => {
  let ketQua = danhSachSua.filter((sp) => {
    return sp.gia >= 30000 && sp.gia <= 60000;
  });
  hienThi(ketQua);
});

document.getElementById("gia-tren60").addEventListener("click",() => {
  let ketQua = danhSachSua.filter((sp)  =>{
    return sp.gia > 60000;
  });
  hienThi(ketQua);
});
  

// LỌC THEO HÃNG
document.getElementById("hang-all").addEventListener("click",  () => {
  hienThi(danhSachSua);
});

document.getElementById("hang-th").addEventListener("click",  () => {
  let ketQua = danhSachSua.filter(function (sp) {
    return sp.hang == "TH true MILK";
  });
  hienThi(ketQua);
});

document.getElementById("hang-cglh").addEventListener("click",  () => {
  let ketQua = danhSachSua.filter(function (sp) {
    return sp.hang == "Cô Gái Hà Lan";
  });
  hienThi(ketQua);
});

document.getElementById("hang-vina").addEventListener("click",  () => {
  let ketQua = danhSachSua.filter(function (sp) {
    return sp.hang == "Vinamilk";
  });
  hienThi(ketQua);
});

document.getElementById("hang-nuti").addEventListener("click", function () {
  let ketQua = danhSachSua.filter( (sp) => {
    return sp.hang == "Nutifood";
  });
  hienThi(ketQua);
});

document.getElementById("loc-sua").addEventListener("click",  () => {
  let ketQua = danhSachSua.filter(function (sp) {
    return sp.loc;
  });
  hienThi(ketQua);
});
// Sắp xếp theo giá từ thấp đến cao
document.getElementById("sort-asc").addEventListener("click", () => {
  // Dùng toán tử spread [...] để copy mảng tránh làm thay đổi mảng gốc
  let ketQua = [...danhSachSua].sort((a, b) => a.gia - b.gia);
  hienThi(ketQua);
});

// Sắp xếp theo giá từ cao đến thấp
document.getElementById("sort-desc").addEventListener("click", () => {
  let ketQua = [...danhSachSua].sort((a, b) => b.gia - a.gia);
  hienThi(ketQua);
});
hienThi(danhSachSua);
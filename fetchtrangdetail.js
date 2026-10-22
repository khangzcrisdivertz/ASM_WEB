// Lấy id từ đường dẫn: detailproduct.html?id=3
let id = Number(new URLSearchParams(window.location.search).get("id"));

// Tìm sản phẩm theo id
let sp = danhSachSua.find(function (x) { return x.id === id; });

// Mở thẳng trang không có id (hoặc id sai) thì lấy sản phẩm đầu tiên
if (!sp) {
  sp = danhSachSua[0];
}

// Đổi tên ở breadcrumb và tiêu đề tab
document.getElementById("ten-sp").innerText = sp.ten;
document.title = sp.ten + " — MilkMarket";

// Vẽ nội dung chi tiết
document.getElementById("detail-wrap").innerHTML = `
  <div class="detail-media">
    <img src="${sp.img}" alt="${sp.ten}" style="max-width:100%; max-height:300px; object-fit:contain;" />
  </div>

  <div class="detail-info">
    <div class="detail-brand">${sp.hang}</div>
    <h1>${sp.ten}</h1>
    <div class="detail-price">${sp.gia.toLocaleString("vi-VN")}đ <span>/ ${sp.donVi}</span></div>
    <p class="detail-desc">${sp.moTa}</p>

    <ul class="spec-list">
      <li><span>Thương hiệu</span><span>${sp.hang}</span></li>
      <li><span>Quy cách</span><span>${sp.donVi}</span></li>
      <li><span>Mã sản phẩm</span><span>#${sp.id}</span></li>
    </ul>

    <div>
      <button class="btn btn-primary" type="button" onclick="addToCart(${sp.id})">Thêm vào giỏ</button>
      <button class="btn btn-outline" type="button" onclick="window.location.href='index.html'">Quay lại trang chủ</button>
    </div>
  </div>
`;
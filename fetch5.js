
fetch(`data.js`)
  .then(Response => Response.text())
  .then(data => {

    eval(data); // chạy nội dung data.js vừa fetch được để có biến danhSachSua

    let html = "";

    danhSachSua.slice(0, 5).forEach(function (sp) {
      html += `
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
      `;
    });

    document.getElementById("product-list").innerHTML = html;
  })
  .catch(error => {
    console.log("Lỗi khi tải dữ liệu:", error);
  });
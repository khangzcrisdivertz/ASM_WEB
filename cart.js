let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Có giaMoi thì lấy giaMoi, không thì lấy gia gốc
function giaSauGiam(sp) {
  return sp.giaMoi || sp.gia;
}

function luuCart() {
  localStorage.setItem("cart", JSON.stringify(cart)); // Lưu giỏ vào trình duyệt
}

function addToCart(id) {
  let daCo = cart.find((x) =>{ return x.id === id; });
 
if(daCo){ // đã có
 daCo.qty++; // tăng

} else {
  cart.push({id: id, qty: 1})
}
luuCart()

  alert("Đã thêm vào giỏ!");
}


function tangSL(item) {
  cart[item].qty++;
  luuCart();
  hienThiCart();
}
function giamSL(item){
  if(cart[item].qty > 1){ // Chỉ giảm khi đang > 1 => không bao giờ bé hơn 1
  cart[item].qty--;  
  
  luuCart();
    hienThiCart();
    }  
}


function xoaKhoiCart(item) {
  cart.splice(item, 1);
luuCart();
    hienThiCart();
}

function hienThiCart() {
  let box = document.getElementById("cart-list");
  if (!box) return; // trang không có giỏ thì thoát
  let html = "";
 let tamTinh = 0;
  let tongSL = 0;

  cart.forEach(function (item, index) {
    // item.id là id trong giỏ -> dùng nó để tìm sản phẩm đầy đủ trong data.js
let sp = danhSachSua.find((x) => {return x.id === item.id;})


 let thanhTien = giaSauGiam(sp) * item.qty; // Thành tiền = giá × số lượng
    tamTinh += thanhTien;                      // Cộng dồn tạm tính
    tongSL += item.qty;    

    html += `
       <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-brand">${sp.hang}</div>
          <div class="cart-item-name">${sp.ten}</div>
        </div>

        <div class="qty-box">
          <button type="button" onclick="giamSL(${index})" ${item.qty === 1 ? "disabled" : ""}>−</button>
          <span>${item.qty}</span>
          <button type="button" onclick="tangSL(${index})">+</button>
        </div>

        <div class="cart-item-price">${thanhTien.toLocaleString("vi-VN")}đ</div>
        <button class="btn-sm btn-remove" type="button" onclick="xoaKhoiCart(${index})">Xoá</button>
      </div>
    `;
  });
  box.innerHTML = html;



let phiShip = (tongSL === 0 || tongSL > 5) ? 0 : 15000;
  let tongCong = tamTinh + phiShip;

  document.getElementById("tam-tinh").innerText = tamTinh.toLocaleString("vi-VN") + "đ";
  document.getElementById("phi-ship").innerText = phiShip.toLocaleString("vi-VN") + "đ";
  document.getElementById("tong-cong").innerText = tongCong.toLocaleString("vi-VN") + "đ";
}

function thanhToan() {
  if (cart.length === 0) {
    alert("Giỏ hàng đang trống!");
    return;
  }
  window.location.href = "checkout.html";
}

hienThiCart();

let gioHang = JSON.parse(localStorage.getItem("cart")) || [];

if(gioHang.length === 0){
    alert("Vui lòng thêm sản phẩm")
} else {
    hienThiTomTat();
}
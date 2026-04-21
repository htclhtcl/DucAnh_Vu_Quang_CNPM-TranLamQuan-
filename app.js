// ===== DANH SÁCH SẢN PHẨM =====
let products = [
    { id:1,  name:"Nike Mercurial Vapor", price:1200000, category:"Shoes", image:"img/nike1.jpg" },
    { id:2,  name:"Adidas Predator Edge", price:1450000, category:"Shoes", image:"img/adidas1.jpg" },
    { id:3,  name:"Puma Ultra Speed", price:1350000, category:"Shoes", image:"img/puma1.jpg" },
    { id:4,  name:"Mizuno Alpha Pro", price:1500000, category:"Shoes", image:"img/mizuno1.jpg" },
    { id:5,  name:"Nike Tiempo Legend", price:1600000, category:"Shoes", image:"img/nike2.jpg" },
    { id:6,  name:"Adidas X Crazyfast", price:1550000, category:"Shoes", image:"img/adidas2.jpg" },
    { id:7,  name:"Puma Future Z", price:1480000, category:"Shoes", image:"img/puma2.jpg" },
    { id:8,  name:"Mizuno Neo III", price:1380000, category:"Shoes", image:"img/mizuno2.jpg" },
    { id:9,  name:"Nike Zoom Run", price:1250000, category:"Shoes", image:"img/nike3.jpg" },
    { id:10, name:"Adidas Run Falcon", price:1150000, category:"Shoes", image:"img/adidas3.jpg" },

    { id:11, name:"Áo MU 2026", price:450000, category:"Shirt", image:"img/mu.jpg" },
    { id:12, name:"Áo Real Madrid", price:470000, category:"Shirt", image:"img/real.jpg" },
    { id:13, name:"Áo Barcelona", price:460000, category:"Shirt", image:"img/barca.jpg" },
    { id:14, name:"Áo Chelsea", price:430000, category:"Shirt", image:"img/chelsea.jpg" },
    { id:15, name:"Áo Arsenal", price:440000, category:"Shirt", image:"img/arsenal.jpg" },
    { id:16, name:"Áo Liverpool", price:450000, category:"Shirt", image:"img/liverpool.jpg" },
    { id:17, name:"Áo PSG", price:470000, category:"Shirt", image:"img/psg.jpg" },
    { id:18, name:"Áo Bayern", price:460000, category:"Shirt", image:"img/bayern.jpg" },
    { id:19, name:"Áo Juventus", price:440000, category:"Shirt", image:"img/juve.jpg" },
    { id:20, name:"Áo Inter Milan", price:430000, category:"Shirt", image:"img/inter.jpg" },

    { id:21, name:"Bóng FIFA Pro", price:350000, category:"Ball", image:"img/ball1.jpg" },
    { id:22, name:"Bóng Champions", price:360000, category:"Ball", image:"img/ball2.jpg" },
    { id:23, name:"Bóng Nike Flight", price:390000, category:"Ball", image:"img/ball3.jpg" },
    { id:24, name:"Bóng Adidas UCL", price:410000, category:"Ball", image:"img/ball4.jpg" },
    { id:25, name:"Bóng Puma Match", price:320000, category:"Ball", image:"img/ball5.jpg" },
    { id:26, name:"Bóng Futsal Pro", price:280000, category:"Ball", image:"img/ball6.jpg" },
    { id:27, name:"Bóng Training", price:250000, category:"Ball", image:"img/ball7.jpg" },
    { id:28, name:"Bóng Mini Kid", price:180000, category:"Ball", image:"img/ball8.jpg" },
    { id:29, name:"Bóng Street", price:220000, category:"Ball", image:"img/ball9.jpg" },
    { id:30, name:"Bóng Premium", price:450000, category:"Ball", image:"img/ball10.jpg" },

    { id:31, name:"Túi Gym Nike", price:500000, category:"Bag", image:"img/bag1.jpg" },
    { id:32, name:"Túi Adidas", price:520000, category:"Bag", image:"img/bag2.jpg" },
    { id:33, name:"Balo Puma", price:470000, category:"Bag", image:"img/bag3.jpg" },
    { id:34, name:"Balo Thể Thao", price:430000, category:"Bag", image:"img/bag4.jpg" },
    { id:35, name:"Túi Du Lịch", price:620000, category:"Bag", image:"img/bag5.jpg" },
    { id:36, name:"Túi Mini Sport", price:350000, category:"Bag", image:"img/bag6.jpg" },
    { id:37, name:"Balo Runner", price:410000, category:"Bag", image:"img/bag7.jpg" },
    { id:38, name:"Túi Đá Bóng", price:490000, category:"Bag", image:"img/bag8.jpg" },
    { id:39, name:"Balo Premium", price:690000, category:"Bag", image:"img/bag9.jpg" },
    { id:40, name:"Túi Team Kit", price:550000, category:"Bag", image:"img/bag10.jpg" },

    { id:41, name:"Tất Nike", price:90000, category:"Accessory", image:"img/acc1.jpg" },
    { id:42, name:"Tất Adidas", price:85000, category:"Accessory", image:"img/acc2.jpg" },
    { id:43, name:"Găng Tay GK", price:290000, category:"Accessory", image:"img/acc3.jpg" },
    { id:44, name:"Băng Gối", price:120000, category:"Accessory", image:"img/acc4.jpg" },
    { id:45, name:"Bình Nước Sport", price:140000, category:"Accessory", image:"img/acc5.jpg" },
    { id:46, name:"Mũ Lưỡi Trai", price:170000, category:"Accessory", image:"img/acc6.jpg" },
    { id:47, name:"Khăn Thể Thao", price:95000, category:"Accessory", image:"img/acc7.jpg" },
    { id:48, name:"Còi Trọng Tài", price:80000, category:"Accessory", image:"img/acc8.jpg" },
    { id:49, name:"Dây Nhảy", price:130000, category:"Accessory", image:"img/acc9.jpg" },
    { id:50, name:"Bó Cổ Tay", price:110000, category:"Accessory", image:"img/acc10.jpg" }
];

// Thêm các sản phẩm còn lại vào đây như cũ của bạn...
// Lưu ý: Mình dùng link ảnh mẫu Picsum để demo nếu bạn chưa có file ảnh thực tế.

let cart = [];
let currentPage = 1;
let perPage = 8;
let currentCategory = "All";
const categories = ["All","Shoes","Shirt","Ball","Bag","Accessory"];

// ===== 1. HÀM TẠO THÔNG BÁO (TOAST) =====
function showToast(message, type = 'success') {
    // Tạo container nếu chưa có
    let container = document.getElementById("toast-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        container.className = "fixed bottom-5 right-5 z-[100] flex flex-col gap-2 pointer-events-none";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    // Style cho thông báo bằng Tailwind
    toast.className = `bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 
                       transform transition-all duration-500 translate-y-20 opacity-0 border-l-4 
                       ${type === 'success' ? 'border-blue-500' : 'border-red-500'} pointer-events-auto`;
    
    toast.innerHTML = `
        <span class="${type === 'success' ? 'bg-blue-500' : 'bg-red-500'} text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">✓</span>
        <span class="font-medium">${message}</span>
    `;

    container.appendChild(toast);

    // Hiệu ứng hiện hình
    setTimeout(() => toast.classList.remove('translate-y-20', 'opacity-0'), 100);

    // Tự động biến mất sau 3 giây
    setTimeout(() => {
        toast.classList.add('opacity-0', '-translate-y-10');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// ===== 2. GIỎ HÀNG (CẬP NHẬT HÀM ADDCART) =====
function addCart(id){
    let item = cart.find(x=>x.id==id);
    let p = products.find(x=>x.id==id); // Lấy thông tin sản phẩm để hiện tên

    if(item){
        item.qty++;
    }else{
        cart.push({...p, qty:1});
    }

    updateCart();

    // HIỆN THÔNG BÁO TẠI ĐÂY
    showToast(`Đã thêm <b>${p.name}</b> vào giỏ hàng!`);
}

// Các hàm loadCategory, filterCategory, loadProducts giữ nguyên như của bạn...
function loadCategory(){
    let html = "";
    categories.forEach(cat=>{
        html += `<button onclick="filterCategory('${cat}')" class="category-btn ${cat==currentCategory?'active':''}"> ${cat} </button>`;
    });
    document.getElementById("categoryList").innerHTML = html;
}

function filterCategory(cat){
    currentCategory = cat;
    currentPage = 1;
    loadCategory();
    loadProducts();
}

function loadProducts(){
    let key = document.getElementById("search").value.toLowerCase();
    let data = products.filter(p=>{
        let matchName = p.name.toLowerCase().includes(key);
        let matchCat = currentCategory=="All" || p.category==currentCategory;
        return matchName && matchCat;
    });

    let start = (currentPage-1)*perPage;
    let end = start + perPage;
    let show = data.slice(start,end);

    let html = "";
    show.forEach(p=>{
        html += `
        <div class="card bg-white p-4 rounded-2xl shadow hover:shadow-lg transition-all">
            <img src="${p.image}" class="w-full h-52 object-cover rounded-xl mb-3">
            <h3 class="font-bold text-lg h-14 line-clamp-2">${p.name}</h3>
            <p class="text-blue-600 font-bold my-2">${p.price.toLocaleString()}đ</p>
            <button onclick="addCart(${p.id})" class="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-slate-900 transition-colors">
                Thêm vào giỏ
            </button>
        </div>`;
    });
    document.getElementById("productList").innerHTML = html;
    loadPagination(data.length);
}

function loadPagination(total){
    let pages = Math.ceil(total/perPage);
    let html = "";
    for(let i=1;i<=pages;i++){
        html += `<button onclick="changePage(${i})" class="page-btn ${i==currentPage?'active':''}"> ${i} </button>`;
    }
    document.getElementById("pagination").innerHTML = html;
}

function changePage(page){
    currentPage = page;
    loadProducts();
}

function updateCart(){
    document.getElementById("cartCount").innerText = cart.length;
    let html = "";
    let total = 0;

    cart.forEach(item=>{
        total += item.price * item.qty;
        html += `
        <div class="flex justify-between items-center border-b py-4">
            <div>
                <h3 class="font-bold text-sm">${item.name}</h3>
                <p class="text-xs text-slate-500">${item.price.toLocaleString()}đ x ${item.qty}</p>
            </div>
            <div class="flex gap-2">
                <button onclick="minusQty(${item.id})" class="bg-gray-100 px-2 rounded">-</button>
                <button onclick="plusQty(${item.id})" class="bg-gray-100 px-2 rounded">+</button>
                <button onclick="removeItem(${item.id})" class="text-red-500 ml-2">✖</button>
            </div>
        </div>`;
    });

    document.getElementById("cartItems").innerHTML = html || `<p class="text-center text-slate-400 py-10">Giỏ hàng trống</p>`;
    document.getElementById("total").innerText = total.toLocaleString()+"đ";
}

function plusQty(id){
    cart.find(x=>x.id==id).qty++;
    updateCart();
}

function minusQty(id){
    let item = cart.find(x=>x.id==id);
    item.qty--;
    if(item.qty<=0) cart = cart.filter(x=>x.id!=id);
    updateCart();
}

function removeItem(id){
    cart = cart.filter(x=>x.id!=id);
    updateCart();
    showToast("Đã xóa sản phẩm", "error");
}

function openCart(){ document.getElementById("cartModal").classList.remove("hidden"); }
function closeCart(){ document.getElementById("cartModal").classList.add("hidden"); }

function showForm(){
    if(cart.length==0) return showToast("Giỏ hàng đang trống!", "error");
    document.getElementById("orderForm").classList.remove("hidden");
}

function submitOrder(){
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;

    if(!name || !phone || !email || !address){
        showToast("Vui lòng điền đủ thông tin", "error");
        return;
    }

    showToast("Đặt hàng thành công! Cảm ơn bạn.");
    cart = [];
    updateCart();
    closeCart();
    document.getElementById("orderForm").classList.add("hidden");
}

document.getElementById("search").addEventListener("input",()=>{
    currentPage = 1;
    loadProducts();
});
// HÀM ĐÓNG/MỞ MODAL HỖ TRỢ
function toggleSupportModal() {
    const modal = document.getElementById("supportModal");
    modal.classList.toggle("hidden");
    
    // Nếu bạn muốn thêm hiệu ứng mượt mà khi hiện ra
    if(!modal.classList.contains("hidden")) {
        modal.style.animation = "fadeIn 0.3s ease-out";
    }
}

// Lắng nghe sự kiện click bên ngoài để đóng modal hỗ trợ
window.onclick = function(event) {
    const supportModal = document.getElementById("supportModal");
    const cartModal = document.getElementById("cartModal");
    
    if (event.target == supportModal) {
        toggleSupportModal();
    }
    // Giữ nguyên logic đóng cart modal nếu có
    if (event.target == cartModal) {
        closeCart();
    }
}

// KHỞI CHẠY
loadCategory();
loadProducts(); 
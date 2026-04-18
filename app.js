const categories = ["Bóng đá", "Bóng rổ", "Tennis", "Boxing", "Bơi lội", "Gym"];
const products = [];

for (let i = 1; i <= 100; i++) {
    const cat = categories[Math.floor(Math.random() * categories.length)];
    products.push({
        id: i,
        name: `${cat} High-End #${i}`,
        price: Math.floor(Math.random() * 50 + 10) * 20000,
        category: cat,
        img: `https://picsum.photos/seed/${i+50}/400/400`
    });
}

let filteredProducts = [...products];
let currentPage = 1;
const itemsPerPage = 12;
let cart = [];

// CATEGORY
function renderCats() {
    const container = document.getElementById('cat-list');
    const allCats = ["All", ...categories];
    container.innerHTML = allCats.map(c => `
        <button onclick="filterProducts('${c}')"
        class="cat-btn px-6 py-2 rounded-xl text-sm font-bold border ${c==='All'?'bg-blue-600 text-white':''}">
        ${c}
        </button>
    `).join('');
}

function filterProducts(cat) {
    currentPage = 1;
    filteredProducts = (cat === 'All') ? products : products.filter(p => p.category === cat);

    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.remove('bg-blue-600','text-white');
        if(btn.innerText === cat) btn.classList.add('bg-blue-600','text-white');
    });

    renderUI();
}

// UI
function renderUI() {
    const grid = document.getElementById('product-grid');
    const start = (currentPage - 1) * itemsPerPage;
    const list = filteredProducts.slice(start, start + itemsPerPage);

    grid.innerHTML = list.map(p => `
        <div class="product-card bg-white rounded-2xl p-3 shadow">
            <img src="${p.img}" class="w-full h-40 object-cover rounded-xl mb-2">
            <h4 class="font-bold text-sm">${p.name}</h4>
            <div class="flex justify-between items-center mt-2">
                <span>${p.price.toLocaleString()}đ</span>
                <button onclick="addToCart(${p.id})" class="bg-blue-600 text-white px-2 rounded">+</button>
            </div>
        </div>
    `).join('');

    renderPagination();
}

// PAGINATION
function renderPagination() {
    const total = Math.ceil(filteredProducts.length / itemsPerPage);
    let html = '';
    for (let i = 1; i <= total; i++) {
        html += `<button onclick="goToPage(${i})">${i}</button>`;
    }
    document.getElementById('pagination').innerHTML = html;
}

function goToPage(p) {
    currentPage = p;
    renderUI();
}

// CART
function addToCart(id) {
    const p = products.find(x => x.id === id);
    const item = cart.find(x => x.id === id);

    if (item) item.quantity++;
    else cart.push({...p, quantity:1});

    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((s,i)=>s+i.quantity,0);
    const totalMoney = cart.reduce((s,i)=>s+i.price*i.quantity,0);

    document.getElementById('cart-count').innerText = totalItems;
    document.getElementById('cart-unique-count').innerText = cart.length;
    document.getElementById('cart-total').innerText = totalMoney.toLocaleString() + 'đ';

    const box = document.getElementById('cart-items');

    if(cart.length===0){
        box.innerHTML = `<p class="text-center text-slate-400">Giỏ hàng trống</p>`;
        return;
    }

    box.innerHTML = cart.map((i,idx)=>`
        <div class="flex justify-between items-center">
            <span>${i.name} x${i.quantity}</span>
            <div>
                <button onclick="changeQty(${idx},-1)">-</button>
                <button onclick="changeQty(${idx},1)">+</button>
                <button onclick="remove(${idx})">x</button>
            </div>
        </div>
    `).join('');
}

function changeQty(i,d){
    cart[i].quantity+=d;
    if(cart[i].quantity<=0) cart.splice(i,1);
    updateCartUI();
}

function remove(i){
    cart.splice(i,1);
    updateCartUI();
}

function toggleCart(){
    document.getElementById('cart-modal').classList.toggle('hidden');
}

// CHECKOUT
function checkout(){
    if(cart.length===0) return alert("Giỏ hàng trống!");
    alert("xác nhận thành công");
}

// INIT
renderCats();
renderUI();
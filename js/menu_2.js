
let menuHtml=`
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>
`;

//取得DOM的節點
let menu = document.getElementById('menu');
// menu.textContent = menuHtml//寫入節點 文字內容
// menu.innerHTML = menuHtml; //將HTML寫入節點

let menuData = [
    {
        title: '首頁首頁',
        url: 'index.html'
    },
    {
        title: '關於我們',
        url: 'about.html'
    },
    {
        title: '商品展示',
        url: 'products.html'
    },
    {
        title: '購物車車',
        url: 'store.html'
    }
];

menuHtml = '';
for( let row of menuData){
    menuHtml += `<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="${row.url}">${row.title}</a></li>`;
    console.log(menuHtml);
}
menu.innerHTML = menuHtml;
/*
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>
*/

// let menuHtml = `
// <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li>
// <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li>
// <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li>
// <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>
// `;

// let menu = document.getElementById('menu');
// menu.innerHTML = menuHtml;
//   console.log(menu)

let menuData = [
    {
        title: 'Home',
        url: 'index.html'
    },

    {
        title: 'About',
        url: 'about.html'
    },

    {
        title: 'Products',
        url: 'products.html'
    },

    {
        title: 'Store',
        url: 'store.html'
    }


];

let menuHtml = '';
for (let row of menuData) {
    menuHtml += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="' + row.url + '">' + row.title + '</a></li>';

    // console.log(row.title);
    // console.log(row.url);

}
let menu = document.getElementById('menu');
menu.innerHTML = menuHtml;

// console.log(console.log(menuData[0].title));//Home
// console.log(menuData[0].title)
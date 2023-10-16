fetch('header only.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header').innerHTML = data;
            });
fetch('footer only.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer').innerHTML = data;
            });
const productsFridges = [
    {
        imgSrc: 'images/1.jpg',
        title: 'Washing machine I-Pro Series 7',
        subtitleProduct: 'Freestanding, 12 Kg, 1400 RPM, Engine Direct Motion, Class A',
        subtitle1: '•Direct Motion Motor',
        subtitle2: '•Refresh',
        subtitle3: '•Automatic cleaning system',
        subtitle4: '•Steam diffusion',
        subtitle5: '•Anti-Bacterial Treatment',
        brand: 'Electrolux',
        price: 500.00,
        id: "F0101",
        quantity: 1
    },
    {
        imgSrc: 'images/2.jpg',
        title: 'Washing machine I-Pro Series 7',
        subtitleProduct: 'Freestanding, 12 Kg, 1400 RPM, Engine Direct Motion, Class A',
        subtitle1: '•Direct Motion Motor',
        subtitle2: '•Refresh',
        subtitle3: '•Automatic cleaning system',
        subtitle4: '•Steam diffusion',
        subtitle5: '•Anti-Bacterial Treatment',
        brand: 'LG',
        price: 450.00,
        id: "F0102",
        quantity: 1
    },
    {
        imgSrc: 'images/3.jpg',
        title: 'Washing machine I-Pro Series 7',
        subtitleProduct: 'Freestanding, 12 Kg, 1400 RPM, Engine Direct Motion, Class A',
        subtitle1: '•Direct Motion Motor',
        subtitle2: '•Refresh',
        subtitle3: '•Automatic cleaning system',
        subtitle4: '•Steam diffusion',
        subtitle5: '•Anti-Bacterial Treatment',
        brand: 'Funiki',
        price: 999.00,
        id: "F0103",
        quantity: 1
    },
    {
        imgSrc: 'images/4.jpg',
        title: 'Washing machine I-Pro Series 7',
        subtitleProduct: 'Freestanding, 12 Kg, 1400 RPM, Engine Direct Motion, Class A',
        subtitle1: '•Direct Motion Motor',
        subtitle2: '•Refresh',
        subtitle3: '•Automatic cleaning system',
        subtitle4: '•Steam diffusion',
        subtitle5: '•Anti-Bacterial Treatment',
        brand: 'Electrolux',
        price: 800.00,
        id: "F0104",
        quantity: 1
    },
    {
        imgSrc: 'images/4.jpg',
        title: 'Washing machine I-Pro Series 7',
        subtitleProduct: 'Freestanding, 12 Kg, 1400 RPM, Engine Direct Motion, Class A',
        subtitle1: '•Direct Motion Motor',
        subtitle2: '•Refresh',
        subtitle3: '•Automatic cleaning system',
        subtitle4: '•Steam diffusion',
        subtitle5: '•Anti-Bacterial Treatment',
        brand: 'Funiki',
        price: 670.00,
        id: "F0105",
        quantity: 1
    },
];

// update code mới thay cho đoạn code cũ
function displayProduct(brand) {
    productFridges.innerHTML = '';
    productsFridges.forEach(product => {
        if (brand === 'all' || product.brand === brand) {
            const productRow = document.getElementById('productFridges');
            const productCol = document.createElement('div');
            productCol.classList.add('col-12', 'col-lg-4', 'col-sm-6', 'my-2');
            productCol.innerHTML = `
            <div class="card" id="${product.id}">
                <img src="${product.imgSrc}" class="card-img-top" alt="...">
                <button class="addcompare" onclick="addtocompare(this)" style="border: none ;font-size: 19px; margin: 5px 0 5px 200px;position: relative; z-index: 1000; color: green; background-color: white;">
                    <i class="fa-sharp fa-regular fa-plus"></i> 
                    Compare
                </button>
                <div class="card-header">
                    <h5 class="card-title">${product.title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary subPro">${product.subtitleProduct}</h6>
                </div>
                <div class="card-body">
                    <p class="card-subtitle mb-2 text-body-secondary sub1">${product.subtitle1}</p>
                    <p class="card-subtitle mb-2 text-body-secondary sub2">${product.subtitle2}</p>
                    <p class="card-subtitle mb-2 text-body-secondary sub3">${product.subtitle3}</p>
                    <p class="card-subtitle mb-2 text-body-secondary sub4">${product.subtitle4}</p>
                    <p class="card-subtitle mb-2 text-body-secondary sub5">${product.subtitle5}</p>
                </div>
                <div class="card-footer">
                    <p class="priceP">$<span class="product-price">${product.price}</span></p>
                    <p class="quantityP d-none">${product.quantity}</p>
                    <a href="product detail.html" class="btn btn-danger stretched-link d-flex justify-content-around">More Detail</a>
                    <button class="btn btn-primary d-flex  justify-content-around addCart" onclick="addToCart(this)" style="width: 100%; margin-top: 5px;position: relative; z-index: 100;">Add To Cart</button>
                </div>
            </div>
        `;
            productRow.appendChild(productCol);
        }
    });
}

// displayProduct('all');

ElectroluxProduct.addEventListener('click', function () {
    displayProduct('Electrolux');
});
LGProduct.addEventListener('click', function () {
    displayProduct('LG');
})
FunikiProduct.addEventListener('click', function () {
    displayProduct('Funiki');
})
SamsungProduct.addEventListener('click', function () {
    displayProduct('Samsung');
})

const showButtonOn = document.getElementById('showButtonOn');
const showButtonOff = document.getElementById('showButtonOff');
const bottomDiv = document.getElementById('bottomDiv');

showButtonOn.addEventListener('click', () => {
    bottomDiv.classList.toggle('show');
    showButtonOn.classList.add('d-none')
});
showButtonOff.addEventListener('click', () => {
    bottomDiv.classList.remove('show');
    showButtonOn.classList.remove('d-none')
});

// đoạn code sử lý giỏ hàng
let cartItems = loadCartFromLocalStorage(); // Load giỏ hàng từ localStorage khi trang web được tải

// Kiểm tra xem dữ liệu lấy từ localstorage có tồn tại không, nếu có tồn tại thì sẽ chuyển thành mảng js, nếu không tồn tại thì sẽ trả về một mảng rỗng
function loadCartFromLocalStorage() {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
}

function addToCart(button) {
    const cardElement = button.parentElement.parentElement;
    const productId = cardElement.getAttribute('id');
    const imgElement = cardElement.querySelector('.card-img-top');
    const h5Element = cardElement.querySelector('.card-title');
    const priceElement = cardElement.querySelector('.product-price');
    // const quantityElement = cardElement.querySelector('quantityP');

    if (imgElement && h5Element && priceElement) {
        const imgSrc = imgElement.getAttribute('src');
        const title = h5Element.innerText;
        const price = priceElement.innerText;
        // const quantity = quantityElement.innerText;

        // Tạo một sản phẩm mới
        const product = {
            id: productId,
            src: imgSrc,
            title: title,
            price: price,
            quantity: 1,
        };

        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
        const existingProductIndex = cartItems.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            // Nếu sản phẩm đã tồn tại trong giỏ hàng, thay thế nó bằng sản phẩm mới
            // cartItems[existingProductIndex] = product;
            alert('This product has already been added')
        } else {
            // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm nó vào giỏ hàng
            cartItems.push(product);
            alert('Product added to cart:');
            saveCartToLocalStorage();
            // Hiển thị thông tin sản phẩm trong giỏ hàng
            console.log(product);
        }
    }
    else {
        return [];
    }
}

function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

window.addEventListener('beforeunload', () => {
    saveCartToLocalStorage();
});

//tạo event khi bấm vào nút Add To Cart 
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.addCart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            addToCart(button);
        });
    });
    displayProduct('all');
});



// Compare item
// check compare
const comparecart = howiamLocalstorage();
// Kiểm tra xem dữ liệu lấy từ localstorage có tồn tại không, nếu có tồn tại thì sẽ chuyển thành mảng js, nếu không tồn tại thì sẽ trả về một mảng rỗng
function howiamLocalstorage() {
    const whatiahave = localStorage.getItem('comparecart');
    return whatiahave ? JSON.parse(whatiahave) : [];
}


// create item in localstorage 
function addtocompare(button) {
    const compareItem = button.parentElement;
    const ID = compareItem.getAttribute('id');
    const IMG = compareItem.querySelector('.card-img-top');
    const subPro = compareItem.querySelector('.subPro');
    const sub1 = compareItem.querySelector('.sub1');
    const sub2 = compareItem.querySelector('.sub2');
    const sub3 = compareItem.querySelector('.sub3');
    const sub4 = compareItem.querySelector('.sub4');
    const sub5 = compareItem.querySelector('.sub5');
    const H5 = compareItem.querySelector('.card-title');
    const PRICE = compareItem.querySelector('.product-price');

    if (IMG && subPro && sub1 && sub2 && sub3 && sub4 && sub5 && H5 && PRICE) {
        const IMGSrc = IMG.getAttribute('src');
        const SUBPRO = subPro.innerText;
        const SUB1 = sub1.innerText;
        const SUB2 = sub2.innerText;
        const SUB3 = sub3.innerText;
        const SUB4 = sub4.innerText;
        const SUB5 = sub5.innerText;
        const PROTILTE = H5.innerText;
        const price = PRICE.innerText;

        // Tạo object mới
        const product = {
            idCOM: ID,
            srcCOM: IMGSrc,
            SUBPROCOM: SUBPRO,
            sub1COM: SUB1,
            sub2COM: SUB2,
            sub3COM: SUB3,
            sub4COM: SUB4,
            sub5COM: SUB5,
            titleCOM: PROTILTE,
            priceCOM: price,
        };
        // Kiểm tra xem sản phẩm đã tồn tại trong compare hay chưa
        const existingCompareIndex = comparecart.findIndex(item => item.idCOM === product.idCOM);

        if (comparecart.length >= 3) {
            alert("You can't add more 3 products");
        }
        else {
            if (existingCompareIndex !== -1) {
                alert('This product has already been added')
            } else {
                // Nếu sản phẩm chưa tồn tại trong compare, thêm nó vào compare
                comparecart.push(product);
                alert('Product added to compare:');
                savecompareToLocalStorage();
                // Hiển thị thông tin sản phẩm trong compare
                console.log(product);
            }
        } 
        // displayCart();
    }
    else {
        return [];
    }
}
function savecompareToLocalStorage() {
    localStorage.setItem('comparecart', JSON.stringify(comparecart));
}

window.addEventListener('compareunload', () => {
    savecompareToLocalStorage();
});

//tạo event khi bấm vào nút compare To Cart 
document.addEventListener('CompareLoad', function () {
    const addTocompareButtons = document.querySelectorAll('.addcompare');
    addTocompareButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            addtocompare(button);
        });
    });
    displayCompare('all');
});


// window.addEventListener('beforeunload', function (event) {
//     // Xóa toàn bộ dữ liệu Local Storage
//     localStorage.clear();
// });


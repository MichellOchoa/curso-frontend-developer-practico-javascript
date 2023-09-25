const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navbarCart = document.querySelector('.navbar-shopping-cart');
const asidePD = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


navbarEmail.addEventListener('click', () => {
    if(!asidePD.classList.contains('inactive')){
        asidePD.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
})

burguerMenu.addEventListener('click',() => {
    if(!asidePD.classList.contains('inactive')){
        asidePD.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
})

navbarCart.addEventListener('click', () => {
    if (!mobileMenu.classList.contains('inactive') || !desktopMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
    asidePD.classList.toggle('inactive');
})

const productList = [];
    productList.push({
        name: 'Bike',
        price: 120,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });

    productList.push({
        name: 'Bike2',
        price: 200,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });

    productList.push({
        name: 'Bike3',
        price: 300,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });

    productList.push({
        name: 'Bike4',
        price: 400,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });

/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */


    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const divSolo = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productFigure = document.createElement('figure');

        const productIcon = document.createElement('img');
        productIcon.setAttribute('src', './icons/bt_add_to_cart.svg');

        productFigure.append(productIcon);
        divSolo.append(productPrice, productName);
        productInfo.append(divSolo,productFigure);
        productCard.append(productImg,productInfo);
        cardsContainer.appendChild(productCard);
    }
    
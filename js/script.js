// NAVBAR ON SCROLL START
function navbarOnScroll() {
  // When the user scrolls down 20px from the top of the document, slide down the navbar
  window.onscroll = function() {
    scrollFunction()
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
  }
}
// NAVBAR ON SCROLL END

// OBJ START
const product = [
  {
    name: "product-1",
    price: 1000,
    description: "CLICK ON IMAGE TO ENLARGE",
    image: "img/image-1.png"
  },
  {
    name: "product-2",
    price: 2000,
    description: "CLICK ON IMAGE TO ENLARGE",
    image: "img/image-2.png"
  },
  {
    name: "product-3",
    price: 1500,
    description: "CLICK ON IMAGE TO ENLARGE",
    image: "img/image-3.png"
  },
  {
    name: "product-4",
    price: 2000,
    description: "CLICK ON IMAGE TO ENLARGE",
    image: "img/image-4.png"
  },
  {
    name: "product-5",
    price: 1700,
    description: "CLICK ON IMAGE TO ENLARGE",
    image: "img/image-5.png"
  },
  {
    name: "product-6",
    price: 1200,
    description: "CLICK ON IMAGE TO ENLARGE",
    image: "img/image-6.png"
  },
  {
    name: "product-7",
    price: 1900,
    description: "CLICK ON IMAGE TO ENLARGE",
    image: "img/image-7.png"
  },
  {
    name: "product-8",
    price: 3000,
    description: "CLICK ON IMAGE TO ENLARGE",
    image: "img/image-8.png"
  },
  {
    name: "product-9",
    price: 1000,
    description: "CLICK ON IMAGE TO ENLARGE",
    image: "img/image-9.png"
  },
  {
    name: "product-9",
    price: 1000,
    description: "CLICK ON IMAGE TO ENLARGE",
    image: "img/image-10.png"
  },
  {
    name: "product-9",
    price: 1000,
    description: "CLICK ON IMAGE TO ENLARGE",
    image: "img/image-11.png"
  },
  {
    name: "product-9",
    price: 1000,
    description: "CLICK ON IMAGE TO ENLARGE",
    image: "img/image-12.png"
  }
];
// OBJ END

// GENERATE PRODUCTS IN MAIN START
function generateProductCard(product) {
  return `
  <div class="product-element">
    <img data-enlargable src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <p>Price: £ ${product.price}</p>
    <button>Add to Cart</button>
  </div>
  `;
}
// GENERATE PRODUCTS IN MAIN END

// RENDER PICS IN PAGE START
function renderCards() {
  const productsContainer = document.getElementById('products-container');
  product.forEach(product => {
    productsContainer.innerHTML += generateProductCard(product);
  });
}
// RENDER PICS IN PAGE END


// MAKE PICTURES BIGGER ON CLICK START
function makePicturesBigger() {
  $('img[data-enlargable]').addClass('img-enlargable').click(function(){
      var src = $(this).attr('src');
      $('<div>').css({
          background: 'RGBA(0,0,0,.9) url('+src+') no-repeat center',
          backgroundSize: 'contain',
          width:'100%', 
          height:'100%',
          position:'fixed',
          zIndex:'10000',
          top:'0', 
          left:'0',
          cursor: 'pointer'
      }).click(function(){
          $(this).remove();
      }).appendTo('body');
  });
}
// MAKE PICTURES BIGGER ON CLICK START

// SCROLL TO THE TOP START
function scrollToTheTop() {
  $("html, body").animate({scrollTop: 0}, 500);
  return false;
};
// SROLL TO THE TOP END

// POPUP EFFECT - CONTACT FORM - START
/* Open */
function openNav() {
  $("#myNav").css({display: "block", height: "100%"});
  $("body").addClass("overflow-hidden");
}
/* Close */
function closeNav() {
  $("#myNav").css({display: "block", height: "0%"});
  $("body").removeClass("overflow-hidden");
}
// POPUP EFFECT - CONTACT FORM - END

// ----------------------------

/* INIT */
function init () {
  navbarOnScroll();
  renderCards();
  makePicturesBigger();
  $(".open-popup").click(openNav);
  $(".closebtn").click(closeNav);
  $(".scroll-top-btn").click(scrollToTheTop);
};

$(document).ready(init);
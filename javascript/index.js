let total = 0;

function dogImg(dog) {
    
    let name1 = dog.getAttribute("data-name");
    let breed1 = dog.getAttribute("data-breed");
    let fee1 = dog.getAttribute("data-fee");

    alert("This is " + name1 + " the " + breed1 + " and his fee is $" + fee1 + ".");
}

/* function runningTotal(t) {
    let cart = document.getElementsByClassName("total-cart");
    let dataCart = cart[0].getAttribute("data-total");
    let carthtml = cart[0].innerHTML;

    let fee = t.getAttribute("data-fee");
    let total = parseFloat(dataCart) + parseFloat(fee);
    cart[0].setAttribute("data-total", total);
    total = "$" + total;
    cart[0].innerHTML = total;
    alert(total);

}
*/

$(document).ready(function() {
  $('button').click(function() {
    let cart = $('.total-cart');
    let dataCart = cart.data('total');
    let carthtml = cart.html();

    let fee = $(this).data('fee');
    let total = parseFloat(dataCart) + parseFloat(fee);
    cart.data('total', total);
    total = "$" + total;
    cart.html(total);
    alert(total);
  });
});


$(document).ready(function() {
  $('.square').hover(function() {
    $(this).addClass('shadow-box');
    $('.shadow-box').css('border', '1px solid black');
    $('.shadow-box').css('border-radius', '5px');
    $('.shadow-box').css('padding', '5px');
    $('.shadow-box').css('margin', '5px');
    $('.shadow-box').css('background-color', 'white');
  }, 
   function() {
    $(this).removeClass('shadow-box');
    $('.square').css('border', 'none');
    $('.square').css('border-radius', 'none');
    $('.square').css('padding', 'none');
    $('.square').css('margin', 'none');
    $('.square').css('background-color', 'none');
    $('.square').css('box-shadow', 'none');
  });

  $('.square button').click(function() {
    $(this).css('background-color', 'red');
  });
});

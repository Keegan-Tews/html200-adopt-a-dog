

let total = 0;






function dogImg(dog) {
    
    let name1 = dog.getAttribute("data-name");
    let breed1 = dog.getAttribute("data-breed");
    let fee1 = dog.getAttribute("data-fee");

    alert("This is " + name1 + " the " + breed1 + " and his fee is $" + fee1 + ".");
}


function runningTotal(t) {
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
































/*/ Get all the dog photo elements
const dogPhotos = document.querySelectorAll('.dog-pic');

// Add click event listener to each dog photo
dogPhotos.forEach((dogPhoto) => {
  dogPhoto.addEventListener('click', function() {
    const dogName = this.nextElementSibling.querySelector('h3').textContent;
    const fee = parseFloat(this.nextElementSibling.querySelector('h4').textContent.split('$')[1]);

    alert("Name: " + dogName + "\nAdoption Fee: $" + fee.toFixed(2));
  });
});







function totalFee() {

}*/
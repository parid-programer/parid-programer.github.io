function submit() {
    var input = document.getElementById("coupon").value;
    var price = document.getElementsByClassName("price")[0];

    applyCoupons()

}

function applyCoupons() {
    var input = document.getElementById("coupon").value;
    var price = document.getElementsByClassName("price")[0];

    switch (input) {
        case "FATIME":
            price.innerHTML = "Price: 00.00€";
            break;
        case "RECOMENDED":
            price.innerHTML = "Price: 19.99€";
            break;
        case "RECOMMENDED":
            price.innerHTML = "Price 2000.20€"
    
        default:
            price.innerHTML = "Price: 20.00€";
            break;
    }
}


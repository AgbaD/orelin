document.addEventListener('DOMContentLoaded', function() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.coingecko.com/api/v3/coins/bitcoin",true);

    xhr.onload = function(){
        const resp = JSON.parse(this.responseText);
        const price = resp.market_data.current_price.ngn;

        const first = document.querySelector(".price");
        const sec = document.querySelector(".btc");
        first.innerHTML = price;
        sec.innerHTML = price;

        console.log(price);
    };
    xhr.send();
}, false);
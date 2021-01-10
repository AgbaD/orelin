const xhr = new XMLHttpRequest();
xhr.open("GET","https://api.coingecko.com/api/v3/coins/bitcoin",true);

xhr.onload = function(){
    const resp = JSON.parse(this.responseText);
    const price = resp.market_data.current_price.ngn;

    console.log(price);
};
xhr.send();
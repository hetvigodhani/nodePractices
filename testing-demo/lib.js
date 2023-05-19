// Testing numbers
module.exports.absolute=function(number){
    return (number>=0)?number:-number;
}

// Testing strings
module.exports.greet=function(name){
    return ('welcome '+name);
}

// Testing arrays
module.exports.getCurrencies=function(){
    return ['IND','AUD','USD'];
}

//Testing objects
module.exports.getProduct=function(productId){
    return{id:productId,price:10};
}
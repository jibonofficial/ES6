var shoppingCart = {
    books:3,
    sunglass: 1
}

for (propertyName in shoppingCart){
    var value=shoppingCart[propertyName];
    console.log(propertyName,value);
}
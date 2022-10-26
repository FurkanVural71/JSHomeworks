function addToCart(productName="Elma",quantity) {
    console.log("Sepete Eklendi : " + productName + " adet : " + quantity)
}

addToCart("Elma")
addToCart("Yumurta",10)
addToCart("Yarak")

let sayHello = () => {
    console.log("Hello Amınoğlu!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello Amın Diğer Oğlu")
}

sayHello2()

let product1 = {productName:"Yarak", unitPrice:31, quantity:69}

function addToCart3(product){
    console.log("Ürün : " +product.productName)
    console.log("Adet : " +product.quantity)
    console.log("Fiyat : " +product.unitPrice)
}

addToCart3(product1)

function addToCart4(x) {
    console.log(products)
    
}

let products = [
    {productName:"Yarak", unitPrice:31, quantity:69},
    {productName:"Göt", unitPrice:31, quantity:69},
    {productName:"Amcık", unitPrice:31, quantity:69}
]

addToCart4(products)

function add(...numbers) { //rest
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total+numbers[i];
        
    }
    console.log(total)
    
}

add(31,69)

let numbers = [31,69,17,471,61]

console.log(...numbers)
console.log(Math.max(...numbers))//spread

//distracting
let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri]] = [
    {name:"İç Anadolu", population:"31M"},
    {name:"Marmara", population:"40M"},
    {name:"Karadeniz", population:"20M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Trabzon","Samsun"]
    ]
]

console.log(icAnadolu)
console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(marmaraSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity}
={productName:"Yarak", unitPrice:31, quantity:69})

console.log(newProductName)



// let productJSON='{"name":"Bread", "price":1.95, "weight":"600g"}'
// let product = JSON.parse(productJSON);
// alert(product.name,product.price);//shows only product name
// alert(product.name +"  "+ product.price);// we need to concatenate to show both
// alert(`${product.price}  ${product.weight}`);
// //--printing JSON--
// alert (productJSON)
// alert (productJSON[0])// nothing printed
// alert(productJSON.name)//undefined. productJSON is not an object



// // ----------for maultiplle elements---- convert JSON to OBJECT--------
let productsJSON = '{ "products" : [' +
'{"name":"Bread", "price":1.95, "weight":"600g"},' +
'{"name":"Butter", "price":2.45, "weight":"500g"},' +
'{"name": "Milk", "price":0.95, "weight":"1000g"}]}';

let productsObj = JSON.parse(productsJSON);

// alert(productsJSON);//prnting JSON string,
// //alert(productsJSON.products[1].name);// doesn't work bcoz indexing not appicable to JSON.

// alert(productsObj); // [object Object] exlained using console command ---- 1
// console.log(productsObj); // here 1st object is "products", 2nd obj is "Array[with 3 objects]",we know array is an object 

// alert(productsObj.products);//[object Object],[object Object],[object Object] ----- 2
// console.log(productsObj.products); // 1st = full Array is an object and Array[0] is another object, 2nd = full Array is an object and Array[1], 3rd = full Array is an object and Array[1],

// alert(productsObj.products[1]);//[object Object]  ----- 3
// console.log(productsObj.products[1]);// 1st = Array[1] is obj and inside propeties of an object, 

// alert(productsObj.products[1].name); // Butter  ---- 4
// console.log(productsObj.products[1].name);// Butter

alert(productsObj.products[2].name + " "+productsObj.products[2].price);
// alert(productsObj.products[0].name + " "+productsObj.products[0].price);

// // ----------for maultiplle objects END--------


// let product= {name:"Bread", price:1.95, weight:"600g"};
// alert(product.name +product.price)
// let productJSON = JSON.stringify(product);

// alert(productJSON);


// ----------for maultiple elements---- convert OBJECT to JSON--------

// let products = [{name: "Bread", price: 1.95, weight: "600g"},
// {name: "Butter", price: 2.45, weight: "500g"},
// {name: "Milk", price: 0.95, "weight":"1000g"}];

// let productsJSON = JSON.stringify(products);
// alert(productsJSON);// include [] brackets??

// let pObj = JSON.parse(productsJSON);

// alert(pObj[1].name);
// alert(pObj[2].name);



// let people = [
//     {
//         name:"Brad",
//         age: 30,
//     },
//     {
//         name:"Ahsan",
//         age: 80,
//     },
//     {
//         name:"Nazmul",
//         age: 20,
//     }
// ]
// console.log(people[1]) working but alert(people[1])....not working

// alert("pObj[0].name: " + pObj[0].name + "\npObj[1].price: " + pObj[1].price);


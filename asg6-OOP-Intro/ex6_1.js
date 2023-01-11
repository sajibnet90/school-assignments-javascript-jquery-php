 const product={
    initValues: function(name, price, amount,exipry){
    this.name=name;
    this.price=price;
    this.amount=amount;
    this.exipry=exipry;
    },

    //method for total value

    totalValue(){
        return this.price * this.amount;},

    //method using turnery operator to check price 
    checkPrice: function(refPrice){
        
        if(this.price<=refPrice)
            return "Reasonable";
        else
           return  "Expensive"; },
    
    //method to check expiry date
    checkExpiry: function(){
        if (currentDate<=this.exipry) 
            return "Not Expired";
        else
            return "Expired";
        }
    }
    
    let productName=prompt("Enter product name", "Milk");
    let productPrice=prompt("Enter product price", 1.20);
    let productAmount = prompt("Enter product amount", 50);
    let expiration= prompt("Write the expiry date: year,month,date")
    let expiryDate = new Date (expiration);
    
    product.initValues(productName, productPrice, productAmount,expiryDate);
    
    //Here we define a reference price and create current date object
    let referencePrice=1.5;
    let currentDate = new Date();
    
    //Here we call the object method and pass an argument to it
    alert(`The price of ${product.name} is ${product["price"]}, which is: ${product.checkPrice(referencePrice)}. Its total value is ${product.totalValue()}. and it is: ${product.checkExpiry()} `);
    
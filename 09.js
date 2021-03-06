function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
class order {
    products = [];
    delivered = false;

    constructor(id,message){
        this.id = id;
        this.message = message;
    }

    add_product = (product)=>{
        this.products.push(product); 
    }

    summarize = async ()=>{
        console.log("start summarize")

        //Simulate databse delay or heavy calculation
        await sleep(2000);
        let summary = "order id: "+ this.id + 
            ", message: " + this.message + ", delivered: " + this.delivered;

        summary += ", Products: [";
        this.products.forEach((product,index)=>{
            summary += product + ", ";
        });
        summary += "]";
        console.log("end summarize")
        return summary;
    }

    deliver = async ()=>{
        console.log("Delivering...")
        await sleep(1000);
        this.delivered = true;
        return;
    }
}

let order_obj = new order(1234,"My order");

order_obj.add_product("coffee");
order_obj.add_product("milk");
order_obj.add_product("banana");

order_obj.deliver().then(()=>{
    console.log("Delivered");
    return order_obj.summarize();
}).then((summary)=>{
    console.log(summary)});

console.log("HERE")
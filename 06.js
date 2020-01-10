function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
class order {
    delivered = false;

    constructor(id,message){
        this.id = id;
        this.message = message;
    }

    summarize = async ()=>{
        console.log("start summarize")

        //Simulate databse delay or heavy calculation
        await sleep(2000);
        const summary = "order id: "+ this.id + 
            ", message: " + this.message + ", delivered: " + this.delivered;
        console.log("end summarize")
        return summary;
    }
}

let order_obj = new order(1234,"My order");

//(parameters)=>{code} 
order_obj.summarize().then((summary)=>{console.log(summary)});
console.log("HERE")

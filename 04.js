class order {
    delivered = false;

    constructor(id,message){
        this.id = id;
        this.message = message;
    }
}


function summarize_order(id, message, delivered){
    var summary = "order id: "+ id + ", message: " + message + ", delivered: " + delivered;
    return summary;
}


let order_obj = new order(1234,"My order");

const order_summary = summarize_order(order_obj.id,order_obj.message,order_obj.delivered);
console.log(order_summary);

order_obj.delivered = true;
const order_summary2 = summarize_order(order_obj.id,order_obj.message,order_obj.delivered);
console.log(order_summary2)


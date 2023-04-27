import Order from "../../models/Order"
import connectDb from "../../middleware/mongoose"
const https = require('https');
var PaytmChecksum = require('paytmchecksum');


const handler = async (req, res) => {

    if(req.method==='POST'){
     // intitiate an order   corresponding to this order id
     
     let order = new Order({
        email:req.body.email,
        orderId:req.body.Oid,
        address:req.body.address,
        amount:req.body.subTotal,
    })
    await order.save()
    
    // insert an entry in the orders table with status as pending

    var paytmParams = {};

    paytmParams.body = {
        "requestType": "Payment",
        "mid": process.env.NEXT_PUBLIC_PAYTM_MID,
        "websiteName": "YOUR_WEBSITE_NAME",
        "orderId": req.body.Oid,
        "callbackUrl": `${process.env.NEXT_PUBLIC_HOST}/api/posttransaction` ,
        "txnAmount": {
            "value": req.body.subTotal,
            "currency": "INR",
        },
        "userInfo": {
            "custId":req.body.email,
        },
    };


   const checksum = await  PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), process.env.PAYTM_MKEY) 

        paytmParams.head = {
            "signature": checksum
        };

        var post_data = JSON.stringify(paytmParams);

      const requestAsync = async ()=>{
         return new Promise((resolve,rejects)=>{
            var options = {


                hostname: process.env.NEXT_PUBLIC_PAYTM_HOST,
    
    
                port: 443,
                path: `/theia/api/v1/initiateTransaction?mid=${process.env.NEXT_PUBLIC_PAYTM_MID}&orderId=${req.body.Oid}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length
                }
            };
    
            var response = "";
            var post_req = https.request(options, function (post_res) {
                post_res.on('data', function (chunk) {
                    response += chunk;
                });
    
                post_res.on('end', function () {
                    console.log('Response: ', response);
                    resolve(JSON.parse(response).body)
                });
            });
    
            post_req.write(post_data);
            post_req.end();
         })
      }
    
       let myr = await requestAsync()
       res.status(200).json(myr)

   
    

    res.status(200).json({ name: 'John Doe' })
    
 }
}

export default connectDb(handler)
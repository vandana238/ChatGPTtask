var axios = require('axios');
var express=require('express')
var app=express()
var cors = require('cors')
const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(cors())

var resultdata=[];
app.post('/getdata',(req,res)=>
{
  console.log(req.body.title)

  var data = JSON.stringify({
    "model": "gpt-3.5-turbo",
    "messages": [
      {
        "role": "user",
        "content": req.body.title
      }
    ]
  });


  
  var config = {
    method: 'post',
    url: 'https://api.openai.com/v1/chat/completions',
    headers: { 
      'Authorization': 'Bearer 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', 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    res.send(response.data.choices[0].message.content)
  })
  .catch(function (error) {
    console.log(error);
  });
  
})

app.post("/post", function(req, res) {
  var details = [
    {
      product_id: req.body.product_id,
      profit:req.body.profit

    }
]
console.log(req.body)
// listdata = details.push(data)
res.send(details)
});

app.post("/coloumn", function(req, res) {
  var defined = [
    {
      type: req.body.type,
      sales: req.body.sales
    }
]
console.log(req.body)
// listdata = details.push(data)
res.send(coloumndata)

});

app.post("/piesdata", function(req, res) {
  var piedefined = [
    {
      type: req.body.type,
      value: req.body.value
    }
]
console.log(req.body)
// listdata = details.push(data)
res.send(pieschartdata)


});
  
app.listen(8030)
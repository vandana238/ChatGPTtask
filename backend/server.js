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

app.post("/get", function(req, res) {
  var details = [
    {
      country: req.body.country,
      standards: req.body.standards,
    }
]
console.log(req.body.title)
data = details.push(countryDetail)
res.send(details)


});
  
app.listen(8030)
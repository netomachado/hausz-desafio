const csv = require('csv-parser');
const fs = require('fs');
const results = [];
const { Data }= require("./database/models");


fs.createReadStream('./hausz.csv')
.pipe(csv({ delimiter:',' }))
.on('data', (data) => results.push(data))
.on("end", ()=>{
  // console.log(results);
});

results.map((obj)=>obj.map((item)=> Data.create(item)))


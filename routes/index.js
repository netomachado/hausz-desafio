const express = require('express');
const router = express.Router();
const multer = require("multer");
const upload = multer();
const csv = require('csv-parser');
const fs = require('fs');
const { Readable } = require('stream');
const readline = require('readline');
const dataControler = require('../controllers/dataController')




/* GET home page. */
router.get('/import', function(req, res, next) {
  res.render('import', { title: 'Import' });
});

router.post('/import', upload.single('file'), async(req, res, next) =>{
  const { file } = req;
  const { buffer }= file;

  const readableFile = new Readable();
  readableFile.push(buffer);
  readableFile.push(null);

  const productsLine = readline.createInterface({
    input: readableFile
  })

  const products= [];

  for await (let line of productsLine){
    const productLineSplit =line.split(",");
    
  

  products.push({
      listing_url: productLineSplit[0],
      scrape_id: Number(productLineSplit[1]),
      last_scraped: productLineSplit[2],
      thumbnail_url: productLineSplit[3],
      host_name: productLineSplit[4],
      host_since: productLineSplit[5],
      host_response_rate: productLineSplit[6],
      host_acceptance_rate: productLineSplit[7],
      host_listings_count: productLineSplit[8],
      host_total_listings_count: productLineSplit[9],
      host_has_profile_pic: productLineSplit[10],
      host_identity_verified: productLineSplit[11],
      neighbourhood: productLineSplit[12],
      neighbourhood_group_cleansed: productLineSplit[13],
      city: productLineSplit[14],
      state: productLineSplit[15],
      zipcode: productLineSplit[16],
      market: productLineSplit[17],
      country_code: productLineSplit[18],
      country: productLineSplit[19],
      latitude: productLineSplit[20],
      longitude: productLineSplit[21],
      property_type: productLineSplit[22],
      room_type: productLineSplit[23],
      accommodates: Number(productLineSplit[24]),
      bathrooms: Number(productLineSplit[25]),
      bedrooms: Number(productLineSplit[26]),
      beds: Number(productLineSplit[27]),
      bed_type: productLineSplit[28],
      price: productLineSplit[29],
      weekly_price: productLineSplit[30],
      monthly_price: productLineSplit[31],
      security_deposit: productLineSplit[32],
      cleaning_fee: productLineSplit[33],
      guests_included: Number(productLineSplit[34]),
      extra_people: productLineSplit[35],
      minimum_nights: Number(productLineSplit[36]),
      maximum_nights: Number(productLineSplit[37]),
      calendar_updated: productLineSplit[38],
      calendar_last_scraped: productLineSplit[39],
      number_of_reviews: Number(productLineSplit[40]),
      first_review: productLineSplit[41],
      last_review: productLineSplit[42],
      review_scores_rating: Number(productLineSplit[43]),
      jurisdiction_names: productLineSplit[44],
      instant_bookable: productLineSplit[45],
      cancellation_policy: productLineSplit[46],
      reviews_per_month: productLineSplit[47]
});
  }
  
  await dataControler.criarBd(products[2]);

  return res.send(products[2]);
  // return res.status(200).json({status: "Tabela importada"}, products[2]);

});

module.exports = router;

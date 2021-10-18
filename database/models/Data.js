module.exports = (sequelize, DataTypes)=>{
  const Data = sequelize.define('Data',{
      
    listing_url:DataTypes.STRING,
    scrape_id: DataTypes.INTEGER,
    last_scraped: DataTypes.STRING,
    thumbnail_url: DataTypes.STRING,
    host_name: DataTypes.STRING,
    host_since: DataTypes.STRING,
    host_response_rate: DataTypes.STRING,
    host_acceptance_rate: DataTypes.STRING,
    host_listings_count: DataTypes.STRING,
    host_total_listings_count: DataTypes.STRING,
    host_has_profile_pic: DataTypes.STRING,
    host_identity_verified: DataTypes.STRING,
    neighbourhood: DataTypes.STRING,
    neighbourhood_group_cleansed: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    market: DataTypes.STRING,
    country_code: DataTypes.STRING,
    country: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    property_type: DataTypes.STRING,
    room_type: DataTypes.STRING,
    accommodates: DataTypes.INTEGER,
    bathrooms: DataTypes.INTEGER,
    bedrooms: DataTypes.INTEGER,
    beds: DataTypes.INTEGER,
    bed_type: DataTypes.STRING,
    price: DataTypes.STRING,
    weekly_price: DataTypes.STRING,
    monthly_price: DataTypes.STRING,
    security_deposit: DataTypes.STRING,
    cleaning_fee:DataTypes.STRING,
    guests_included: DataTypes.INTEGER,
    extra_people: DataTypes.STRING,
    minimum_nights: DataTypes.INTEGER,
    maximum_nights: DataTypes.INTEGER,
    calendar_updated: DataTypes.STRING,
    calendar_last_scraped: DataTypes.STRING,
    number_of_reviews: DataTypes.INTEGER,
    first_review: DataTypes.STRING,
    last_review: DataTypes.STRING,
    review_scores_rating: DataTypes.INTEGER,
    jurisdiction_names: DataTypes.STRING,
    instant_bookable: DataTypes.STRING,
    cancellation_policy: DataTypes.STRING,
    reviews_per_month: DataTypes.STRING
      },
      {
      tableName:'datas'
});

  
   
  return Data
}
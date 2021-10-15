'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("datas", {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      listing_url:Sequelize.STRING,
      scrape_id: Sequelize.INTEGER,
      last_scraped: Sequelize.STRING,
      thumbnail_url: Sequelize.STRING,
      host_name: Sequelize.STRING,
      host_since: Sequelize.STRING,
      host_response_rate: Sequelize.STRING,
      host_acceptance_rate: Sequelize.STRING,
      host_listings_count: Sequelize.STRING,
      host_total_listings_count: Sequelize.STRING,
      host_has_profile_pic: Sequelize.STRING,
      host_identity_verified: Sequelize.STRING,
      neighbourhood: Sequelize.STRING,
      neighbourhood_group_cleansed: Sequelize.STRING,
      city: Sequelize.STRING,
      state: Sequelize.STRING,
      zipcode: Sequelize.STRING,
      market: Sequelize.STRING,
      country_code: Sequelize.STRING,
      country: Sequelize.STRING,
      latitude: Sequelize.STRING,
      longitude: Sequelize.STRING,
      property_type: Sequelize.STRING,
      room_type: Sequelize.STRING,
      accommodates: Sequelize.INTEGER,
      bathrooms: Sequelize.INTEGER,
      bedrooms: Sequelize.INTEGER,
      beds: Sequelize.INTEGER,
      bed_type: Sequelize.STRING,
      price: Sequelize.STRING,
      weekly_price: Sequelize.STRING,
      monthly_price: Sequelize.STRING,
      security_deposit: Sequelize.STRING,
      cleaning_fee:Sequelize.STRING,
      guests_included: Sequelize.INTEGER,
      extra_people: Sequelize.STRING,
      minimum_nights: Sequelize.INTEGER,
      maximum_nights: Sequelize.INTEGER,
      calendar_updated: Sequelize.STRING,
      calendar_last_scraped: Sequelize.STRING,
      number_of_reviews: Sequelize.INTEGER,
      first_review: Sequelize.STRING,
      last_review: Sequelize.STRING,
      review_scores_rating: Sequelize.INTEGER,
      jurisdiction_names: Sequelize.STRING,
      instant_bookable: Sequelize.STRING,
      cancellation_policy: Sequelize.STRING,
      reviews_per_month: Sequelize.STRING,


      created_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      updated_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("datas");
  },
};
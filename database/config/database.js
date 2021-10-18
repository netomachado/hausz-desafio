
module.exports = {
    development: {
      username: "root",
      password: "",
      database: "hausz",
      host: "127.0.0.1",
      dialect: "mysql",
      port: 3306,
      define: {
        underscored : true
      }
    },
    test: {
      username: "root",
      password: null,
      database: "hausz",
      host: "127.0.0.1",
      dialect: "mysql"
    },
    production: {
      username: "root",
      password: null,
      database: "hausz",
      host: "127.0.0.1",
      dialect: "mysql"
    }
  }
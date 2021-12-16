const env = process.env

const config = {
    db: { 
      user: env.DB_USER,
      host: env.DB_HOST,
      password: env.DB_PASSWORD,
      database:  env.DB_NAME
    },
  };
  
  
  module.exports = config;
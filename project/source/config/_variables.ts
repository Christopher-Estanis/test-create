const variables = {
  API_PRIVATE_KEY: process.env.API_PRIVATE_KEY, // auth.js
  API_ACCESS_TOKEN_EXPIRATION: process.env.API_ACCESS_TOKEN_EXPIRATION, // auth.js
  API_REFRESH_TOKEN_EXPIRATION: process.env.API_REFRESH_TOKEN_EXPIRATION, // auth.js
  EXTERNAL_API_TOKEN: process.env.EXTERNAL_API_TOKEN, // auth.js
  API_TOKENS: process.env.API_TOKENS, // auth.js
  DATABASE_NAME: process.env.DATABASE_NAME, // connection.js
  DATABASE_USERNAME: process.env.DATABASE_USERNAME, // connection.js
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD, // connection.js
  DATABASE_CUSTERNAME: process.env.DATABASE_CUSTERNAME, // conection.js
  MAIL_SECURE: process.env.MAIL_SECURE, // mail.js
  MAIL_HOST: process.env.MAIL_HOST, // mail.js
  MAIL_PORT: process.env.MAIL_PORT, // mail.js
  MAIL_USER: process.env.MAIL_USER, // mail.js
  MAIL_PASS: process.env.MAIL_PASS, // mail.js
  MAIL_RCPT: process.env.MAIL_RCPT, // mail.js
  NAME: process.env.NAME, // environment.js
  PORT: process.env.PORT, // environment.js
}

module.exports = !process.env.NAME ? require('./_localVars') : variables

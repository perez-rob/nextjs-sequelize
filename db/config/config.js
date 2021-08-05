'use strict';
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
  },
  production: {
    username: 'root',
    password: '',
    database: 'bbtest',
    host: '127.0.0.1',
    dialect: 'mysql',
    dialectOptions: {
      ssl: true,
    },
  },
};

const { Pool } = require("pg");

const pool = new Pool({
    user: "qgocbdmvudzllx",
    host: "ec2-18-208-55-135.compute-1.amazonaws.com",
    database: "de3u7v04kk281p",
    password: "71ce8d63ff569a7eab3e3b8d3a3fc1836fd840fc9549e030e8fdac3431353612",
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    }

});

const query = (text, param) => {
    return pool.query(text, param);
};

module.exports = { query }


const { Pool } = require("pg");

const pool = new Pool({
    user: "lodjcxlfcfrdkc",
    host: "ec2-44-205-112-253.compute-1.amazonaws.com",
    database: "dindin",
    password: "3ab217a5289c7285653612fa15ab516252ef7026677d2986f9a9f6d383a503fd",
    port: 5432,
    ssl: {
        rejectUnauthourizad: false,
    }

});

const query = (text, param) => {
    return pool.query(text, param);
};

module.exports = { query }


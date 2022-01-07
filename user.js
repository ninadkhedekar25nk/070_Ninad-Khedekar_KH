// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const app = express()
const mysql = require('mysql')
const Promise = require('bluebird')
Promise.promisifyAll(require("mysql/lib/Pool").prototype);
Promise.promisifyAll(require("mysql/lib/Connection").prototype);


const dbinfo = {
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'wpt1'
};

async function connectionCheck(){
    const Connection = mysql.createConnection(dbinfo);
    await Connection.connectAsync();
    console.log("created");
    await Connection.endAsync();
}

connectionCheck();

const user={ msg: "i am giving my exam"};

async function addUser(user){
    const Connection = mysql.createConnection(dbinfo);
    await Connection.connectAsync();
    console.log("AddUser > Connection Created");
    let sql = `insert into message(msg) values(?)`;
    await Connection.queryAsync(sql,[user,name]);
    await Connection.endAsync();
    console.log("Record Added");
}

async function selectUser() {
    const Connection = mysql.createConnection(dbinfo);
    await Connection.connectAsync();
    console.log("AddUser  > Connection Created");
    let sql = "select * from message";
    const list = await Connection.queryAsync(sql);
    await Connection.endAsync();
    return list;
}

selectUser();

module.exports = {addUser,selectUser};


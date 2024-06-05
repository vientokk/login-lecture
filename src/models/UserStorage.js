"use strict";

const { userInfo } = require("os");

const db = require("../config/db");
const { resolve } = require("path");
const { rejects } = require("assert");

class UserStorage{    
    static getUsersInfo(id){
        return new Promise ((resolve, rejects)=>{
            const query = "Select * From users where id = ?;";
            db.query(query,[id] ,(err,data)=>{
                if(err)  rejects(err);
                resolve(data[0]);
            });
        });
    }
    
    static async save(userInfo){   
        return new Promise ((resolve, rejects)=>{
            const query = "insert into users (id, name, psword) values(?, ?, ?);";
            db.query(query,
                [userInfo.id, userInfo.name, userInfo.psword],
                (err)=>{
                if(err)  rejects(`${err}`);
                resolve({success:true});
            });
        });
    }
}

module.exports = UserStorage;
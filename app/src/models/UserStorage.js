"use strict";

class UserStorage{

    static #users = {
        id: ["a","woorimIT", "나개발", "김팀장"],
        psword: ["b","1234", "1234", "123456"],
        name: ["c","우리밋", "나개발", "김팀장"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        // console.log(newUsers);
        return newUsers;
    }    
}

module.exports = UserStorage;
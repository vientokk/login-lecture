"use strict";
class UserStorage{
    static #users = {
        id : ["aaa","kki", '가나다', '김성'],
        psword : ["bbb",'1234','4567','0258'],
        name :['킴','리','팍','정'],
    };
    
    static getUsers(...fields){ 
        const users = this.#users; 
        const newUsers = fields.reduce((newUsers,field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{}); 
        return newUsers;
    }
}

module.exports = UserStorage;
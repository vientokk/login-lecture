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

    static getUsersInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);  
        const usersKeys = Object.keys(users); //=>[id, psword, name]
        const newInfo =  usersKeys.reduce((newUser,info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return newInfo;
    }

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return {success : true};
    }
}

module.exports = UserStorage;
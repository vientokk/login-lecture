"use strict";
const UserStorage= require('./UserStorage');

class User{
    constructor(body){
        this.body = body;
    }
    login(){
        const client = this.body;
        const {id, psword} = UserStorage.getUsersInfo(client.id);
        if(id){
            if(id === client.id && psword === client.psword){
                return {success : true};
            }
            return {success:false , msg : "비밀번호 확인"}
        }
        return {success:false , msg : "아이디 확인"}
    }

    register(){
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
}

module.exports = User;
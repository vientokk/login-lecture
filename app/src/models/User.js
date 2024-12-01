"use strict";
const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    login(){
        const body = this.body;
        const {id, psword} = UserStorage.getUserInfo(body.id);
        // const a = UserStorage.getUserInfo("나개발");
        if(id){
            if(id === body.id && psword === body.psword){
                return {success :true};
            }
            return {success : false, msg:"비밀번호 오류"};
        }
        return {success : false, msg:"아이디 확인"};
    }
};

module.exports = User;
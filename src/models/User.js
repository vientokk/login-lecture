"use strict";
const UserStorage= require('./UserStorage');

class User{
    constructor(body){
        this.body = body;
    }
    async login(){
        const client = this.body;
        try {
            const {id, psword} =  await UserStorage.getUsersInfo(client.id);
            if(id){
                if(id === client.id && psword === client.psword){
                    return {success : true};
                }
                return {success:false , msg : "비밀번호 확인"}
            }
            return {success:false , msg : "아이디 확인"}    
        } catch (error) {
            return {success:false , msg : err}    
        }
        
    }

    async register(){
        const client = this.body;
        try{
            const response = await UserStorage.save(client); 
            return response;
        }catch(err){
            return {success:false , msg:err}
        }
    }
}

module.exports = User;
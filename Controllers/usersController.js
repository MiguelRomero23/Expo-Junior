const { Router } = require("express");

class UsersController{
    router = Router();
}

constructor(); {
    this.getUsers();
    this.createUsers()
}

getUsers = () => {
    this.router.get("/",(request,response) => {
        
        response.send("");
    });
};

createUsers = () => {
    this.router.post("/",(request,response) =>{

        response.send("");
    });
};

const usersRouter = newUserController();
module.exports = usersRouter.router;
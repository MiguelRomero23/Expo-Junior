const { Router } = require("express");

class UserController {
    router = Router();

    constructor() {
        this.getUsers();
        this.createUsers()
    }

    getUsers = () => {
        this.router.get("/", (request, response) => {

            response.send("");
        });
    };

    createUsers = () => {
        this.router.post("/", (request, response) => {

            response.send("");
        });
    };
}



const usersRouter = new UserController();
module.exports = usersRouter.router;
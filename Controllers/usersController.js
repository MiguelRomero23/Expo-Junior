const { Router } = require("express");

class UserController {
    router = Router();
    config ={
        host: "192.168.1.179",
        port: "3306",
        user: "pomaadmin",
        password: "Sup3r@t3",
        database: "stay_safe"
    }

    constructor() {
        this.getUsers();
        this.createUsers()
    }

    getUsers = () => {
        this.router.get("/", (request, response) => {
            
            response.send("Hello");
        });
    };

    createUsers = () => {
        this.router.post("/", (request, response) => {
            var { userName, userAdress, userAge, userEmail} = req.body;
            if ( userName && userAdress && userAge && userEmail) {
              var id = users.length + 1;
              var newUser = { ...req.body, id };
              users.push(newUser); 
              res.json(user);
            } 
            response.send("Nuevo usuario agregado con éxito");
        });
    };
}



const usersRouter = new UserController();
module.exports = usersRouter.router;
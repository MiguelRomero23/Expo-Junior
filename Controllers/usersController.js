const { Router } = require("express");

class UsersController{
    router = Router();
    config ={
        host: "192.168.1.179",
        port: "3306",
        user: "pomaadmin",
        password: "Sup3r@t3",
        database: "stay_safe"
    }
}

constructor(); {
    this.getUsers();
    this.createUsers()
}

getUsers = () => {
    this.router.get("/riskPercentage",(request,response) => {
        res.json(risk);
        response.send("");
    });
};

createUsers = () => {
    this.router.post("/addUser", (request, response) => {
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

//Prueba de Enpoint createUsers
//const{results,fields}=req.body(
            //`INSERT INTO users (first_name, last_name, address, age, education_level) 
                   //VALUES ("${userName}", "${userAge}", "${userEmail}", ${userAdress}, 
            //);
            //response.status(200).send({
            //message: "Nuevo usuario agregado con exito",
            //});
            //});
            

const usersRouter = newUserController();
module.exports = usersRouter.router;
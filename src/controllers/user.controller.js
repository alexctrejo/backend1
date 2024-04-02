const UserModel = require('../models/user.model');

class UserController {

    static async getUsers(req, res) {
        const usuarios = await UserModel.getUsers()
        console.log(usuarios.rows);
        res.send('users');
    }

    static async getById(req, res){
        const { id } = req.params;
        const user = await UserModel.getById( id );
        if (user) return res.send(user.rows);
        res.status(404).json({ message: "User not found" });
    }
}



module.exports =  UserController;

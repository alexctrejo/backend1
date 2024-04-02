const bd = require('../utils/bd');

class UserModel {

    static async getUsers (){
        const usuarios = await bd.query('SELECT * FROM usuarios');
        return usuarios;
    }

    static async getById( id ){
        const query = {
            text: 'SELECT * FROM usuarios WHERE id = $1',
            values: [id]
        };
        const user = await bd.query(query);
        return user;
    }
    
}

module.exports = UserModel
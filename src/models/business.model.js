const bd = require('../utils/bd');

class BusinessModel {
    static async getBusinessByKey(keyword) {
        // Suponiendo que `bd` es tu objeto para interactuar con la base de datos y tiene un método `query` para ejecutar consultas SQL
        // Ten en cuenta que esto es un ejemplo hipotético, y necesitas ajustar el código según tu entorno de base de datos real
        const query = `SELECT * FROM businesses WHERE LOWER(nombre_del_negocio) LIKE '%${keyword}%' OR LOWER(descripcion) LIKE '%${keyword}%';`;
        
        try {
            const businesses = await bd.query(query);
            return businesses;
        } catch (error) {
            console.error("Error al buscar negocios:", error);
            throw error;
        }
    }
}

module.exports = BusinessModel;
const BusinessModel = require("../models/business.model");

class BusinessController {
    static async getBusinessByKey(req, res) {
        try {
            const { keyword } = req.params;
            const businesses = await BusinessModel.getBusinessByKey(keyword);
            // Envía los resultados como respuesta
            res.status(200).json({ businesses });
        } catch (error) {
            // Maneja los errores y envía una respuesta de error adecuada
            console.error("Error al obtener negocios:", error);
            res.status(500).json({ error: "Error al obtener negocios" });
        }
    }
}

module.exports = BusinessController;

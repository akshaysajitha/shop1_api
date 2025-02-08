const db = require("../config/db");

const User = {
    create: async (name, email, password) => {
        const sql = "INSERT INTO corporate_user (sFirstname, sEmail, sPassword) VALUES (?, ?, ?)";
        const [result] = await db.execute(sql, [name, email, password]);
        return result;
    },

    getByEmail: async (email) => {
        const sql = "SELECT * FROM corporate_user WHERE sEmail = ?";
        const [rows] = await db.execute(sql, [email]);
        return rows[0];
    },
    
    
};

module.exports = User;

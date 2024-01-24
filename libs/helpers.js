const db = require("../datebase");

const getTodoById = async (id) => {
  const q = `SELECT * FROM todo 
   WHERE id = ?`;

  const [rows] = await db.query(q, [id]);

  return rows[0];
};

module.exports = { getTodoById };

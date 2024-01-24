const router = require("express").Router();
const db = require("../datebase");
const { getTodoById } = require("../libs/helpers");

router.get("/getall", async (req, res) => {
  const q = `SELECT * FROM todo`;
  const [rows] = await db.query(q);

  res.send(rows);
});

router.post("/add-todo", async (req, res) => {
  const q = `INSERT INTO todo (title, description)
   VALUES (?, ?)`;

  const [result] = await db.query(q, [req.body.title, req.body.description]);
  const addedTodo = await getTodoById(result.insertId);
  res.send(addedTodo);
});

router.put("/update-todo/:id", async (req, res) => {
  const q = `UPDATE todo
   SET title =?, description =?
   WHERE id =?`;

  await db.query(q, [req.body.title, req.body.description, req.params.id]);

  const updatedTodo = await getTodoById(req.params.id);

  res.send(updatedTodo);
});

router.delete("/delete-todo/:id", async (req, res) => {
  const q = `DELETE FROM todo
   WHERE id =?`;

  await db.query(q, [req.params.id]);

  res.send({ message: "Todo deleted" });
});

router.get("/get-todo/:id", async (req, res) => {
  const q = `SELECT * FROM todo
   WHERE id =?`;

  const [rows] = await db.query(q, [req.params.id]);

  res.send(rows[0]);
});

module.exports = router;

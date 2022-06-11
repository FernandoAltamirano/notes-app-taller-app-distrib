const express = require("express");
const TaskModel = require("../models/modelTask");
const router = express.Router();

router.get("/", async (req, res) => {
  const tasks = await TaskModel.find();
  res.json(tasks);
});
router.get("/:id", async (req, res) => {
  const taskOne = await TaskModel.findById(req.params.id);
  res.json(taskOne);
});

router.post("/", async (req, res) => {
  const { title, description } = req.body;
  const newTask = new TaskModel({ title, description });
  await newTask.save();
  res.send(newTask);
});

router.put("/:id", async (req, res) => {
  const { title, description } = req.body;
  const newTask = { title, description };
  await TaskModel.findByIdAndUpdate(req.params.id, newTask);
  res.send("ACTUALIZADO");
});

router.delete("/:id", async (req, res) => {
  await TaskModel.findByIdAndRemove(req.params.id);
  res.json("ELIMINADO");
});

module.exports = router;

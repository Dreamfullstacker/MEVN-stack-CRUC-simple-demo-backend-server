module.exports = approute => {
  const students_controller = require("../controllers/students.controller");
  var router = require("express").Router();

  // Create a new User
  router.post("/create_student", students_controller.create);

  // Retrieve all Users
 router.get("/", students_controller.findAll);
  // Retrieve a single User with id
  router.get("/edit/:id", students_controller.findOne);

  // Update a User with id
  router.put("/update/:id", students_controller.update);

  // Delete a User with id
  router.delete("/delete/:id", students_controller.delete);

  // Delete all users
  router.delete("/students", students_controller.deleteAll);

  approute.use("/api",router);
}
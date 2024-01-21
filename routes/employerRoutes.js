const {
  registerEmployer,
  loginEmployer,
  getAllEmployers,
  getEmployer,
  deleteEmployer,
  editEmployer,
} = require("../controllers/employerController");

const auth = require("../middlewares/auth");

function employerRoutes(fastify, options, done) {
  //* Register employer
  fastify.post("", {
    preHandler: [auth(["admin"])],
    schema: {
      tags: ["Employer"],
    },
    handler: registerEmployer,
  });

  //* Login employer
  fastify.post("/login", {
    schema: {
      tags: ["Employer"],
    },
    handler: loginEmployer,
  });

  //* Get all employers
  fastify.get("/", {
    preHandler: [auth(["admin"])],
    schema: {
      tags: ["Employer"],
    },
    handler: getAllEmployers,
  });

  //* Get one employer
  fastify.get("/:id", {
    preHandler: [auth(["admin", "employer"])],
    schema: {
      tags: ["Employer"],
    },
    handler: getEmployer,
  });

  //* Delete an employer
  fastify.delete("/:id", {
    preHandler: [auth(["admin"])],
    schema: {
      tags: ["Employer"],
    },
    handler: deleteEmployer,
  });

  //* Update employer's fullname vs phone number
  fastify.put("/:id", {
    preHandler: [auth(["admin", "employer"])],
    schema: {
      tags: ["Employer"],
    },
    handler: editEmployer,
  });

  done();
}

module.exports = employerRoutes;

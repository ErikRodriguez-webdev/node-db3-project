const db = require("../data/connection");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

function findSteps(id) {
  return db("steps").where({ id });
}

function add(schemeData) {
  return db("schemes")
    .insert(schemeData, "id")
    .then((response) => {
      return findById(response[0]);
    });
}

function addStep(stepData, id) {
  return db("steps").insert(stepData);
} //ask for help

function update(changesOBJ, id) {
  return db("schemes")
    .where({ id })
    .update(changesOBJ);
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}

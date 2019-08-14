const skills = [{ skill: "HTML" }, { skill: "CSS" }, { skill: "JavaScript" }];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};

function deleteOne(id) {
  skills.splice(id, 1);
}
function create(skill) {
  skills.push(skill);
}

function getAll() {
  return skills;
}

function getOne(id) {
  return skills[id];
}

const skills = [{ skill: "HTML" }, { skill: "CSS" }, { skill: "JavaScript" }];

module.exports = {
  getAll,
  getOne
};

function getAll() {
  return skills;
}

function getOne(id) {
  return skills[id];
}

const sqliteConnection = require("../../sqlite");
const createusers = require("./createUsers");

async function migrationsRun() {
  const schemas = [
    createusers
  ].join('');

  sqliteConnection()
  .then(db => db.exec(schemas))
  .catch(error => console.error(error));
}

module.exports = migrationsRun;
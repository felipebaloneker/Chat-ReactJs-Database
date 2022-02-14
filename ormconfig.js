module.exports = {
    "type":"postgres",
    "url":process.env.DATABASE_URL,
    "host":"localhost",
    "port":"5432",
    "username":"postgres",
    "password":"admin",
    "database":"postgres",
    "migrations":["src/database/migrations/*.js"],
    "entities":["src/entities/*.js"],
    "cli":{
        "migrationsDir":"src/database/migrations",
        "entitiesDir":"src/entities"
    }
}
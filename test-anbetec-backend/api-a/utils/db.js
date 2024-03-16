const Sequelize = require('sequelize');

// Utilize directly the environment variables instead of referencing a config file
const sequelize = new Sequelize('anbetec-test', 'postgres', 'admin2024', {
  host: 'localhost',
  dialect: 'postgres',
});

(async () => {
  try {
    // Attempt to connect to the database
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Perform database synchronization (create tables if they don't exist)
    await sequelize.sync({ alter: true });
    console.log('Database tables synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

//exported the sequelize instance
module.exports = sequelize;
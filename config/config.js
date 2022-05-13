require('dotenv').config()
module.exports = {
  development: {
    database: 'colab_db',
    dialect: 'postgres'
  },
  test: {
    database: 'colab_db_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}

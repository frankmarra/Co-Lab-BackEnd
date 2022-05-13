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
    database: 'colab_db_production',
    dialect: 'postgres'
  }
}

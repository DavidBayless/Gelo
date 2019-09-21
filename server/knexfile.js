module.exports = {
    development: {
      client: 'pg',
      connection: process.env.DATABASE_URL || {user: 'postgres', password: 'postgres', database: 'gelodb'}
    },
    production: { client: 'pg', connection: process.env.DATABASE_URL }
  };
export const GetDBSettings = () => {
      return {
        host: process.env.HOSTNAME_DB,
  
        port: parseInt(process.env.PORT_DB),
  
        user: process.env.USERNAME_DB,
  
        password: process.env.PASSWORD_DB,
  
        database: process.env.DATABASE_DB,
      }
}
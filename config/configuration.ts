// export default () => ({
//   port: parseInt(process.env.SERVER_PORT, 10) || 9101,
//   database: {
//     type: (process.env.DATABASE_TYPE as string) || "mysql",
//     host: process.env.DATABASE_HOST as string,
//     port: parseInt(process.env.DATABASE_PORT as string, 10) || 3306,
//     username: (process.env.DATABASE_USERNAME as string) || "ims",
//     password: process.env.DATABASE_PASSWORD as string,
//     database: process.env.DATABASE_NAME as string,
//     entities: [__dirname + "/../**/*.entity{.ts,.js}"],
//     synchronize:
//       JSON.parse(process.env.DATABASE_SYNCHRONIZE as string) || false,
//     logging: JSON.parse(process.env.DATABASE_LOGGING as string) || true,
//     charset: process.env.DATABASE_CHARSET as string,
//     timezone: (process.env.DATABASE_TIMEZONE as string) || "+09:00",
//   },
// });

import "dotenv/config";
export default () => ({
  port: parseInt(process.env.SERVER_PORT, 10) || 9101,
  database: {
    type: (process.env.DATABASE_TYPE as string) || "mariadb",
    host: process.env.DATABASE_HOST as string,
    port: parseInt(process.env.DATABASE_PORT as string, 10) || 3306,
    username: (process.env.DATABASE_USERNAME as string) || "ims",
    password: process.env.DATABASE_PASSWORD as string,
    database: process.env.DATABASE_NAME as string,
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    synchronize:
      JSON.parse(process.env.DATABASE_SYNCHRONIZE as string) || false,
    logging: JSON.parse(process.env.DATABASE_LOGGING as string) || true,
    charset: process.env.DATABASE_CHARSET as string,
    timezone: (process.env.DATABASE_TIMEZONE as string) || "+09:00",
  },
});

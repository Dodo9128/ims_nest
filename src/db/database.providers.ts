import { DataSource } from "typeorm";

export const databaseProviders = [
  {
    provide: "DATA_SOURCE",
    useFactory: async () => {
      const dataSource = new DataSource({
        type: "mysql",
        host: "127.0.0.1",
        port: 3306,
        username: "ims",
        password: "Cipet0217",
        database: "ims_node_test",
        entities: [__dirname + "/../**/*.entity{.ts,.js}"],
        synchronize: false,
        charset: "utf8mb4_unicode_ci",
      });

      return dataSource.initialize();
    },
  },
];

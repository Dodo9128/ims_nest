// import { Module } from "@nestjs/common";
// import { TypeOrmModule } from "@nestjs/typeorm";
// import { databaseProviders } from "./database.providers";
// import configuration from "../../config/configuration";
// //
// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: "mysql",
//       host: "127.0.0.1",
//       port: 3306,
//       username: "ims",
//       password: "Cipet0217",
//       database: "ims_node_test",
//       entities: [__dirname + "/../**/*.entity{.ts,.js}"],
//       synchronize: true,
//       logging: true,
//       charset: "utf8mb4_unicode_ci",
//       timezone: "+09:00",
//     }),
//   ],
//   // providers: [...databaseProviders],
//   // exports: [...databaseProviders],
//   // providers: [...databaseProviders],
//   // exports: [...databaseProviders],
// })
// export class DatabaseModule {}

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { databaseProviders } from "./database.providers";
// import configuration from "../../config/configuration";
import { ConfigModule, ConfigService } from "@nestjs/config";
//
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: "mariadb",
          host: configService.get("DATABASE_HOST"),
          port: +configService.get<number>("DATABASE_PORT"),
          username: configService.get("DATABASE_USERNAME"),
          password: configService.get("DATABASE_PASSWORD"),
          database: configService.get("DATABASE_NAME"),
          entities: [__dirname + "/../**/*.entity{.ts,.js}"],
          synchronize: JSON.parse(configService.get("DATABASE_SYNCHRONIZE")),
          logging: JSON.parse(configService.get("DATABASE_LOGGING")),
          charset: configService.get("DATABASE_CHARSET"),
          timezone: configService.get("DATABASE_TIMEZONE"),
        };
      },
    }),
  ],
  // providers: [...databaseProviders],
  // exports: [...databaseProviders],
  // providers: [...databaseProviders],
  // exports: [...databaseProviders],
})
export class DatabaseModule {}

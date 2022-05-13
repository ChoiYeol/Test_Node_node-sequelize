import { Sequelize } from "sequelize-typescript";
import config from "./config";

export { Test } from "./models/Test";

const {
  database,
  port,
  timezone,
  read: readDBConfig,
  write: writeDBConfig,
} = config;

export default new Sequelize({
  database, //스키마 이름
  dialect: "mysql", //sql종류
  port,
  timezone, // timezone: "+09:00", 서울 시간 적용
  logging: true,
  define: {
    charset: "utf8mb4", // charset 중 하나로 utf8은 한글만 적용되지만 mb4 붙은건 이모지도 적용된다. mysql, mariadb 한정으로 사용가능하다.
    collate: "utf8mb4_unicode_ci", //참조 https://www.letmecompile.com/mysql-utf8-utf8mb4-migration/
    timestamps: true,
    underscored: true,
  },
  models: [`${__dirname}/models`],
  replication: {
    read: [readDBConfig],
    write: writeDBConfig,
  },
});

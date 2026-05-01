import { Sequelize } from "sequelize";
import { dbConfig } from "../../config";

export const sequelize = new Sequelize(
  dbConfig.DB_NAME,
  dbConfig.DB_USER,
  dbConfig.DB_PASSWORD,
  {
    host: dbConfig.DB_HOST,
    dialect: "mysql",
    logging: true
  }
);
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: `car.sqlite`,
  synchronize: false,
  logging: false,
  // entities: ['/entity/*.entity{.ts,.js}'],
  entities: [],
  migrationsRun: true,
  // migrationsTransactionMode: 'all',
  migrations: [`migrations/*.js`],
  subscribers: []
});

import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import * as path from 'path';

export default (): PostgresConnectionOptions => ({
  url: process.env.DATABASE_URL,
  type: 'postgres',
  entities: [path.join(__dirname, '/../**/*.entity{.ts,.js}')],
  synchronize: true,
});

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const getTypeOrmConfig = async (
    configService: ConfigService,
): Promise<TypeOrmModuleOptions> => {
  const ssl = configService.get<string>('DATABASE_SSL') === 'true';

  return {
    type: 'postgres',
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USER'),
    password: configService.get<string>('DB_PASS'),
    database: configService.get<string>('DB_NAME'),
    autoLoadEntities: true,
    synchronize: configService.get<string>('DATABASE_SYNCHRONIZE') === 'true',
    ssl: ssl ? { rejectUnauthorized: false } : false,
  };
};

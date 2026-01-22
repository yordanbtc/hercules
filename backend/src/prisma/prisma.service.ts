import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private pool: pg.Pool;

  constructor() {
    // 1. Configuramos el Pool de conexiones usando la variable de entorno
    const connectionString = process.env.DATABASE_URL;
    const pool = new pg.Pool({ connectionString });
    
    // 2. Creamos el adaptador
    const adapter = new PrismaPg(pool);

    // 3. Pasamos el adaptador a la clase base PrismaClient
    super({ adapter });
    
    this.pool = pool;
  }

  async onModuleInit() {
    try {
      await this.$connect();
      console.log('🚀 Conexión exitosa a la base de datos con Driver Adapter');
    } catch (error) {
      console.error('❌ Error al conectar a la base de datos:', error);
    }
  }

  async onModuleDestroy() {
    // Cerramos el pool de conexiones al apagar la aplicación
    await this.$disconnect();
    await this.pool.end();
  }
}
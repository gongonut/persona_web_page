import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'apps', 'IBA_noche'),
      serveRoot: '/IBA_noche',
    }),
    MongooseModule.forRoot('mongodb://localhost/test'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

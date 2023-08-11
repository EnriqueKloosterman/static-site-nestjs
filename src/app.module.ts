import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client', 'pages'),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client', 'css'),
      serveRoot: '/css',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client', 'fonts'),
      serveRoot: '/fonts',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

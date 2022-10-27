import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as passport from 'passport';
import * as connectMongoDBSession from 'connect-mongodb-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  const MongoDBStore = connectMongoDBSession(session);

  const sessionStore = new MongoDBStore({
    uri: process.env.MONGODB_URL,
    collection: 'sessions',
  });
  app.use(
    session({
      secret: `${process.env.SESSION_SECRET}`,
      resave: false,
      saveUninitialized: false,
      rolling: true,
      unset: 'destroy',
      store: sessionStore,
      cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week in milliseconds
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3003);
}
bootstrap();

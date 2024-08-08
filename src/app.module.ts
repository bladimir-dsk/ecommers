import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { RegisterModule } from './register/register.module';
import { ProfileModule } from './profile/profile.module';
import { MessageModule } from './message/message.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5444,
      username: "eccomers",
      password: "root",
      database: "db_eccomers",
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    ProductModule,
    RegisterModule,
    ProfileModule,
    MessageModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}

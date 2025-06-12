import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { DatabaseModule } from './database/database.module'

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ".env",
  }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      global: true,
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_KEY') as string
      }),
      inject: [ConfigService]
    })],
})
export class CoreModule { }
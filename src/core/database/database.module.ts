import { Global, Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { RedisService } from './redis.service'

@Global()
@Module({
  providers: [RedisService, PrismaService],
  exports: [RedisService, PrismaService]
})
export class DatabaseModule { }
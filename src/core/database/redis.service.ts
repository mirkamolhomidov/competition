import { Injectable, Logger } from '@nestjs/common'
import Redis from 'ioredis'

@Injectable()
export class RedisService {
  private redis: Redis
  private logger: Logger
  constructor() {
    this.logger = new Logger(RedisService.name)
    this.redis = new Redis({
      port: +(process.env.REDIS_PORT as string),
      host: process.env.REDIS_HOST as string
    })
    this.redis.on('connect', () => this.logger.log("Redis connected"))
    this.redis.on('error', (err) => this.logger.error(`Redis connection error: ${err.message}`, err.stack))
    this.redis.quit()
  }
}
import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private prisma: PrismaClient
  private logger: Logger
  constructor() {
    this.prisma = new PrismaClient()
    this.logger = new Logger(PrismaService.name)
  }
  async onModuleInit() {
    try {
      await this.prisma.$connect()
      this.logger.log("Prisma connected")
    } catch (err) {
      this.logger.error(`Prisma connection error ${err.message}`, err.stack)
    }
  }
  async onModuleDestroy() {
    await this.prisma.$disconnect()
    this.logger.log("Prisma disconnected")
  }
}
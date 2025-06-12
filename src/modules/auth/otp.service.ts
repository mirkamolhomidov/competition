import { Injectable } from '@nestjs/common'
import { generate } from 'otp-generator'
import { RedisService } from 'src/core/database/redis.service'

@Injectable()
export class OtpService {
  constructor(private redisService: RedisService) { }
  generatorOtp() {
    const otp = generate(4, {
      digits: true,
      specialChars: false,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
    })
    return otp
  }
}
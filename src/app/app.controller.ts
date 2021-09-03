import { AppService } from "@/app/app.service"
import { Controller, Get } from "@nestjs/common"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'AliasOne11 IS ALIVE!!!'
  }
}

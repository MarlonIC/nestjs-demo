import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  getTest(): string {
    return 'Testing controller cats';
  }
}
ImageClub1*

import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  // # As a best practice, use nestjs approach of error handeling whenever possible
  @Get()
  findAll() {
    return 'This action returns all coffees';
  }

  //   @Get()
  //   findAll(@Res() response) {
  //     response.status(200).send('This action returns all coffees'); //? this approach should be used with caution, since it'll make us loose some nestjs specific features like interceptors etc..
  //     // return 'This action returns all coffees';
  //   }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE) //! here we have set a static HTTP Status code,{this shows we can manipulate status code in nestjs}
  create(@Body() body) {
    return body;
  }
}

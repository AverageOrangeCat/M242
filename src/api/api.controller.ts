import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('api')
export class ApiController {
    @Get()
    getApi(@Req() req: Request, @Res() res: Response): void {
        res.status(404).sendFile('api.html', {
            root: './src/static',
        });
    }
}

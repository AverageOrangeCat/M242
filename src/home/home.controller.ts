import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class HomeController {
    @Get()
    getHome(@Req() req: Request, @Res() res: Response): void {
        res.status(200).sendFile('home.html', {
            root: './src/static',
        });
    }
}

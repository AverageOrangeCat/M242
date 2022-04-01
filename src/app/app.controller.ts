import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('static')
export class AppController {
    @Get('css')
    getCss(@Req() req: Request, @Res() res: Response): void {
        res.status(200).sendFile('static.css', {
            root: './src/static',
        });
    }

    @Get('js')
    getJs(@Req() req: Request, @Res() res: Response): void {
        res.status(200).sendFile('static.js', {
            root: './src/static',
        });
    }
}

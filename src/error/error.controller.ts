import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('*')
export class ErrorController {
    @Get()
    getError(@Req() req: Request, @Res() res: Response): void {
        res.status(404).sendFile('error.html', {
            root: './src/static',
        });
    }
}

import { Controller, All, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import * as Server from 'http-proxy';

@Controller('api/entry')
export class ProxyEntryController {
  private server: Server;
  constructor() {
    this.server = Server.createProxyServer();
  }

  @All()
  proxyAll(@Req() request: Request, @Res() response: Response): void {
    this.server.web(request, response, {
      changeOrigin: true,
      target: 'http://localhost:3000/entry',
    });
  }
}

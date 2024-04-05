import { Get, Guards } from '@cosmoosjs/hono-openapi';
import { inject, injectable } from 'inversify';
import type * as hono from 'hono';
import { HTTPException } from 'hono/http-exception';
import { TestGuard } from 'src/libs/guards/test.guard';

@injectable()
export class ControllerRoot {

  public setup(): void {
    this.helloWorld();
  }

  @Get({
    path: '/',
    responses: {},
  })
  @Guards(TestGuard)
  private helloWorld(_ctx?: hono.Context): unknown {
    throw new HTTPException(500, {
      message: 'Hello my name is error',
    });
  }
}

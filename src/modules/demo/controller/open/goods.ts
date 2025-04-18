import { DemoGoodsService } from '../../service/goods';
import { DemoGoodsEntity } from '../../entity/goods';
import { Body, Inject, Post } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';

/**
 * 测试
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: DemoGoodsEntity,
  service: DemoGoodsService,
  pageQueryOp: {
    fieldLike: ['title'],
  },
})
export class OpenDemoGoodsController extends BaseController {
  @InjectEntityModel(DemoGoodsEntity)
  demoGoodsEntity: Repository<DemoGoodsEntity>;

  @Inject()
  demoGoodsService: DemoGoodsService;

  @Post('/sqlPage', { summary: 'sql分页查询' })
  async sqlPage(@Body() query) {
    return this.ok(await this.demoGoodsService.sqlPage(query));
  }

  @Post('/entityPage', { summary: 'entity分页查询' })
  async entityPage(@Body() query) {
    return this.ok(await this.demoGoodsService.entityPage(query));
  }
}

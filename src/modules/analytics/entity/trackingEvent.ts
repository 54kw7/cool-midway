import { BaseEntity } from '../../base/entity/base';
import { Column, CreateDateColumn, Entity } from 'typeorm';

/**
 * 埋点统计
 */
@Entity('tracking_event')
export class TrackingEventEntity extends BaseEntity {
  @Column({ comment: '事件名称', length: 255 })
  eventName: string;

  @CreateDateColumn({ comment: '事件时间' }) // 自动生成时间戳
  eventTime: Date;

  @Column({ comment: '事件数据', type: 'json', nullable: true }) // JSON 格式存储额外数据
  eventData: any;

  @Column({ comment: '设备类型', length: 50, nullable: true })
  deviceType: string;

  @Column({ comment: '浏览器', length: 50, nullable: true })
  browser: string;

  @Column({ comment: '操作系统', length: 50, nullable: true })
  os: string;

  @Column({ comment: 'IP地址', length: 50, nullable: true })
  ipAddress: string;

  @Column({ comment: '来源页面URL', length: 255, nullable: true })
  referrer: string;

  @Column({ comment: '当前页面URL', length: 255 })
  pageUrl: string;

  @Column({ comment: 'userAgent', type: 'text', nullable: true })
  userAgent: string;
}

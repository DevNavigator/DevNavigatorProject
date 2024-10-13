import { Course } from 'src/courses/entities/course.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'subscriptions' })
export class Subscription {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, (user) => user.id, { cascade: true })
  Users: User[];

  @OneToMany(() => Course, (course) => course.id, { cascade: true })
  Course: Course[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  start_sub: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  end_sub: Date;

  @Column({
    type: 'boolean',
    default: false,
  })
  status_sub: boolean;
}

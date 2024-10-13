import { Exercise } from 'src/exercises/entities/exercise.entity';
import { Subscription } from 'src/subscriptions/entities/subscription.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'courses' })
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  type: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  content_url: string;

  is_free: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Column({
    type: 'boolean',
    default: false,
  })
  status_courses: boolean;

  @ManyToMany(() => User, (user) => user.id, { cascade: true })
  Users: User[];

  @ManyToMany(() => Exercise, (exercise) => exercise.id, { cascade: true })
  Exercise: Exercise[];

  @ManyToOne(() => Subscription, (subscription) => subscription.id, {
    cascade: true,
  })
  Subscription: Subscription[];
}

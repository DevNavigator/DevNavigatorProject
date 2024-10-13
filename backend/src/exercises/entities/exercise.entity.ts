import { Course } from 'src/courses/entities/course.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'exercises' })
export class Exercise {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => Course, { cascade: true })
  @JoinTable({ name: 'curse_exercise_id' })
  Courses: Course[];

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
  solution_url: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Column({
    type: 'boolean',
    default: false,
  })
  status_exercises: boolean;
}

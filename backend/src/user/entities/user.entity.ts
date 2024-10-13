import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserType } from '../enum/UserType.enum';

@Entity({ name: 'User' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  lastname: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'varchar', nullable: false })
  phone: string;

  @Column({ type: 'date', nullable: false })
  birthdate: Date;

  @Column({ type: 'varchar', nullable: false })
  country: string;

  @Column({ type: 'varchar', nullable: false })
  address: string;

  @Column({
    type: 'enum',
    enum: UserType,
    default: UserType.User,
  })
  typeUser?: UserType;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  @Column({ type: 'boolean', default: false })
  statusUser: boolean;
}

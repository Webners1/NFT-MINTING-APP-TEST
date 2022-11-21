import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;
  
  @Column({
    name: 'wallet',
    nullable: false,
    default: '',
  })
  wallet: string;

  @Column({
    name: 'metadata',
    nullable: false,
    default: '',
  })
  metadata: string;

  @Column({
    name: 'tokenId',
    nullable: false,
    default: 0,
  })
  tokenId: number;
}

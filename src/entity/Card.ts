import { Column, PrimaryColumn, ManyToOne, Entity, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { CardStatus, PaymentSystem } from '../helpers/constants';
import Account from './Account';
import BaseEntity from './BaseEntity';

@Entity()
class Card extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  cardNumber: string;

  @Column()
  cardName: string;

  @OneToMany(() => Account, (account) => account.card)
  accountNumbers: Account[];

  @Column({ length: 50 })
  holderName: string;

  @Column()
  expirationDate: Date;

  @Column({ type: 'enum', enum: PaymentSystem })
  paymentSystem: PaymentSystem;

  @Column({ type: 'enum', enum: CardStatus })
  status: CardStatus;

  @Column('decimal', { precision: 19, scale: 4 })
  transactionLimit: number;

  @Column()
  isVirtual: boolean;

  @Column()
  cardColor: string;
}

export default Card;

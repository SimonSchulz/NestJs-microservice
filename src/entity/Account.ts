import { Column, OneToOne, JoinColumn, OneToMany, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import BaseEntity from './BaseEntity';
import Credit from './Credit';
import PaymentSchedule from './PaymentSchedule';
import Operation from './Operation';
import Card from './Card';

@Entity()
class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  clientId: string;

  @OneToOne(() => Credit)
  @JoinColumn({ name: 'creditId' })
  creditId: Credit;

  @Column('decimal', { precision: 19, scale: 4 })
  principalDebt: number;

  @Column('decimal', { precision: 19, scale: 4 })
  interestDebt: number;

  @Column('decimal', { precision: 19, scale: 4 })
  outstandingPrincipal: number;

  @Column('decimal', { precision: 19, scale: 4 })
  outstandingInterestDebt: number;

  @Column()
  openingDate: Date;

  @Column()
  closingDate: Date;

  @Column()
  isMainAccount: boolean;

  @Column('decimal', { precision: 19, scale: 4 })
  balance: number;

  @Column({ length: 3 })
  currencyCode: string;

  @Column()
  isActive: boolean;

  @OneToMany(() => PaymentSchedule, (paymentSchedule) => paymentSchedule.accountNumber)
  paymentSchediles: PaymentSchedule[];

  @OneToMany(() => Operation, (operation) => operation.accounNumber)
  operations: Operation[];

  @ManyToOne(() => Card, (card) => card.accountNumbers)
  card: Card;
}

export default Account;

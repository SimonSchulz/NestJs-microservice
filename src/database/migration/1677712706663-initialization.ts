import {MigrationInterface, QueryRunner} from "typeorm";

export class initialization1677712706663 implements MigrationInterface {
    name = 'initialization1677712706663'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "agreement" ("created_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "id" SERIAL NOT NULL, "agreementDate" TIMESTAMP NOT NULL, "terminationDate" TIMESTAMP NOT NULL, "isActive" boolean NOT NULL, "responsibleSpecialistId" character varying(20) NOT NULL, "creditId" integer, CONSTRAINT "REL_a905111b5268bc9c305a633dc6" UNIQUE ("creditId"), CONSTRAINT "PK_e7537188219eeef56233a609753" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."product_calculationmode_enum" AS ENUM('DIFFERENTIATED', 'ANNUITY')`);
        await queryRunner.query(`CREATE TABLE "product" ("created_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "id" SERIAL NOT NULL, "name" character varying NOT NULL, "minSum" numeric(19,4) NOT NULL, "maxSum" numeric(19,4) NOT NULL, "currencyCode" character varying(3) NOT NULL, "minInterestRate" numeric(6,4) NOT NULL, "maxInterestRate" numeric(6,4) NOT NULL, "needGuarentees" boolean NOT NULL, "deliveryInCash" boolean NOT NULL, "earlyRepayment" boolean NOT NULL, "needIncomeDetails" boolean NOT NULL, "minPeriodMonths" integer NOT NULL, "maxPeriodMonths" integer NOT NULL, "isActive" boolean NOT NULL, "details" character varying NOT NULL, "calculationMode" "public"."product_calculationmode_enum" NOT NULL, "gracePeriodMonth" integer NOT NULL, "rateIsAdjustable" boolean NOT NULL, "rateBase" character varying(20) NOT NULL, "rateFixPart" numeric(6,4) NOT NULL, "increasedRate" numeric(6,4) NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."credit_order_status_enum" AS ENUM('PENDING', 'REJECTED', 'INDIVIDUAL_CONDITIONS')`);
        await queryRunner.query(`CREATE TABLE "credit_order" ("created_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "id" SERIAL NOT NULL, "clientid" character varying NOT NULL, "amount" numeric(19,4) NOT NULL, "monthlyIncome" numeric(19,4) NOT NULL, "monthlyExpenditure" numeric(19,4) NOT NULL, "status" "public"."credit_order_status_enum" NOT NULL, "periodMonth" integer NOT NULL, "creationDate" TIMESTAMP NOT NULL, "employerIdentificationNumber" character varying(10) NOT NULL, "productId" integer, CONSTRAINT "REL_dcee9081365a9bb600fc3001dc" UNIQUE ("productId"), CONSTRAINT "PK_8970efdc0a57418fda0dccf4f51" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "credit" ("created_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "id" SERIAL NOT NULL, "type" character varying(20) NOT NULL, "creditLimit" numeric(19,4) NOT NULL, "interestRate" numeric(19,4) NOT NULL, "latePaymentRate" numeric(6,4) NOT NULL, "currencyCode" character varying(3) NOT NULL, "personalGuarantees" boolean NOT NULL, "status" character varying(30) NOT NULL, "gracePeriodMonth" integer NOT NULL, "orderId" integer, CONSTRAINT "REL_1419df244809aa35d63a91c642" UNIQUE ("orderId"), CONSTRAINT "PK_c98add8e192ded18b69c3e345a5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment_schedule" ("created_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "id" SERIAL NOT NULL, "paymentDate" TIMESTAMP NOT NULL, "principal" numeric(19,4) NOT NULL, "interest" numeric(19,4) NOT NULL, "accountNumberId" integer, CONSTRAINT "PK_fd76f64bff977874311b67cacc5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "operation_type" ("created_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "type" character varying NOT NULL, "isDebt" boolean NOT NULL, CONSTRAINT "PK_c5621e6ce27a6c372695011e6d9" PRIMARY KEY ("type"))`);
        await queryRunner.query(`CREATE TABLE "operation" ("created_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "id" SERIAL NOT NULL, "sum" numeric(19,4) NOT NULL, "details" character varying NOT NULL, "currencyCode" character varying(3) NOT NULL, "completedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "accounNumberId" integer, "operationTypeId" character varying, CONSTRAINT "REL_336eb067c8656c47302d9736ea" UNIQUE ("operationTypeId"), CONSTRAINT "PK_18556ee6e49c005fc108078f3ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."card_type_enum" AS ENUM('CREDIT', 'DEBIT')`);
        await queryRunner.query(`CREATE TYPE "public"."card_paymentsystem_enum" AS ENUM('MAESTRO', 'VISA', 'MASTERCARD')`);
        await queryRunner.query(`CREATE TYPE "public"."card_status_enum" AS ENUM('BLOCKED', 'ACTIVE', 'EXPIRED')`);
        await queryRunner.query(`CREATE TABLE "card" ("created_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "id" SERIAL NOT NULL, "cardNumber" character varying NOT NULL, "cardName" character varying NOT NULL, "holderName" character varying(50) NOT NULL, "type" "public"."card_type_enum" NOT NULL, "expirationDate" TIMESTAMP NOT NULL, "paymentSystem" "public"."card_paymentsystem_enum" NOT NULL, "status" "public"."card_status_enum" NOT NULL, "transactionLimit" numeric(19,4) NOT NULL, "isVirtual" boolean NOT NULL, "cardColor" character varying NOT NULL, CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "account" ("created_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "id" SERIAL NOT NULL, "clientId" character varying NOT NULL, "principalDebt" numeric(19,4) NOT NULL, "interestDebt" numeric(19,4) NOT NULL, "outstandingPrincipal" numeric(19,4) NOT NULL, "outstandingInterestDebt" numeric(19,4) NOT NULL, "openingDate" TIMESTAMP NOT NULL, "closingDate" TIMESTAMP NOT NULL, "isMainAccount" boolean NOT NULL, "balance" numeric(19,4) NOT NULL, "currencyCode" character varying(3) NOT NULL, "isActive" boolean NOT NULL, "creditId" integer, "cardId" integer, CONSTRAINT "REL_dc55c08acc980d296adb370f0c" UNIQUE ("creditId"), CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "agreement" ADD CONSTRAINT "FK_a905111b5268bc9c305a633dc65" FOREIGN KEY ("creditId") REFERENCES "credit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "credit_order" ADD CONSTRAINT "FK_dcee9081365a9bb600fc3001dc6" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "credit" ADD CONSTRAINT "FK_1419df244809aa35d63a91c642a" FOREIGN KEY ("orderId") REFERENCES "credit_order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment_schedule" ADD CONSTRAINT "FK_4ca5ddfac5ccc7e86629fec75b3" FOREIGN KEY ("accountNumberId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "operation" ADD CONSTRAINT "FK_237aa5a855101b4c5e71424e104" FOREIGN KEY ("accounNumberId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "operation" ADD CONSTRAINT "FK_336eb067c8656c47302d9736ea1" FOREIGN KEY ("operationTypeId") REFERENCES "operation_type"("type") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "account" ADD CONSTRAINT "FK_dc55c08acc980d296adb370f0c6" FOREIGN KEY ("creditId") REFERENCES "credit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "account" ADD CONSTRAINT "FK_131447d4e1ca7968f3827bad0a1" FOREIGN KEY ("cardId") REFERENCES "card"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" DROP CONSTRAINT "FK_131447d4e1ca7968f3827bad0a1"`);
        await queryRunner.query(`ALTER TABLE "account" DROP CONSTRAINT "FK_dc55c08acc980d296adb370f0c6"`);
        await queryRunner.query(`ALTER TABLE "operation" DROP CONSTRAINT "FK_336eb067c8656c47302d9736ea1"`);
        await queryRunner.query(`ALTER TABLE "operation" DROP CONSTRAINT "FK_237aa5a855101b4c5e71424e104"`);
        await queryRunner.query(`ALTER TABLE "payment_schedule" DROP CONSTRAINT "FK_4ca5ddfac5ccc7e86629fec75b3"`);
        await queryRunner.query(`ALTER TABLE "credit" DROP CONSTRAINT "FK_1419df244809aa35d63a91c642a"`);
        await queryRunner.query(`ALTER TABLE "credit_order" DROP CONSTRAINT "FK_dcee9081365a9bb600fc3001dc6"`);
        await queryRunner.query(`ALTER TABLE "agreement" DROP CONSTRAINT "FK_a905111b5268bc9c305a633dc65"`);
        await queryRunner.query(`DROP TABLE "account"`);
        await queryRunner.query(`DROP TABLE "card"`);
        await queryRunner.query(`DROP TYPE "public"."card_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."card_paymentsystem_enum"`);
        await queryRunner.query(`DROP TYPE "public"."card_type_enum"`);
        await queryRunner.query(`DROP TABLE "operation"`);
        await queryRunner.query(`DROP TABLE "operation_type"`);
        await queryRunner.query(`DROP TABLE "payment_schedule"`);
        await queryRunner.query(`DROP TABLE "credit"`);
        await queryRunner.query(`DROP TABLE "credit_order"`);
        await queryRunner.query(`DROP TYPE "public"."credit_order_status_enum"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TYPE "public"."product_calculationmode_enum"`);
        await queryRunner.query(`DROP TABLE "agreement"`);
    }

}

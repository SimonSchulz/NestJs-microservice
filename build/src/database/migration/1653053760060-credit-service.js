"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SomeNameTest1653053760060 = void 0;
class SomeNameTest1653053760060 {
    constructor() {
        this.name = 'SomeNameTest1653053760060';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "product" ("created_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "id" SERIAL NOT NULL, "name" character varying NOT NULL, "minSum" numeric(19,4) NOT NULL, "maxSum" numeric(19,4) NOT NULL, "currencyCode" character varying(3) NOT NULL, "minInterestRate" numeric(6,4) NOT NULL, "maxInterestRate" numeric(6,4) NOT NULL, "needGuarentees" boolean NOT NULL, "deliveryInCash" boolean NOT NULL, "earlyRepayment" boolean NOT NULL, "needIncomeDetails" boolean NOT NULL, "minPeriodMonths" integer NOT NULL, "maxPeriodMonths" integer NOT NULL, "isActive" boolean NOT NULL, "details" character varying NOT NULL, "calculationMode" "public"."product_calculationmode_enum" NOT NULL, "gracePeriodMonth" integer NOT NULL, "rateIsAdjustable" boolean NOT NULL, "rateBase" character varying(20) NOT NULL, "rateFixPart" numeric(6,4) NOT NULL, "increasedRate" numeric(6,4) NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "credit_order" ("created_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "id" SERIAL NOT NULL, "clientid" character varying NOT NULL, "amount" numeric(19,4) NOT NULL, "monthlyIncome" numeric(19,4) NOT NULL, "monthlyExpenditure" numeric(19,4) NOT NULL, "status" "public"."credit_order_status_enum" NOT NULL, "periodMonth" integer NOT NULL, "creationDate" TIMESTAMP NOT NULL, "employerIdentificationNumber" character varying(10) NOT NULL, "productId" integer, CONSTRAINT "REL_dcee9081365a9bb600fc3001dc" UNIQUE ("productId"), CONSTRAINT "PK_8970efdc0a57418fda0dccf4f51" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "credit" ("created_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "id" SERIAL NOT NULL, "type" character varying(20) NOT NULL, "creditLimit" numeric(19,4) NOT NULL, "interestRate" numeric(19,4) NOT NULL, "latePaymentRate" numeric(6,4) NOT NULL, "currencyCode" character varying(3) NOT NULL, "personalGuarantees" boolean NOT NULL, "status" character varying(30) NOT NULL, "gracePeriodMonth" integer NOT NULL, "orderId" integer, CONSTRAINT "REL_1419df244809aa35d63a91c642" UNIQUE ("orderId"), CONSTRAINT "PK_c98add8e192ded18b69c3e345a5" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "agreement" ("created_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "id" SERIAL NOT NULL, "agreementDate" TIMESTAMP NOT NULL, "terminationDate" TIMESTAMP NOT NULL, "isActive" boolean NOT NULL, "responsibleSpecialistId" character varying(20) NOT NULL, "creditId" integer, CONSTRAINT "REL_a905111b5268bc9c305a633dc6" UNIQUE ("creditId"), CONSTRAINT "PK_e7537188219eeef56233a609753" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "payment_schedule" ("created_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "id" SERIAL NOT NULL, "paymentDate" TIMESTAMP NOT NULL, "principal" numeric(19,4) NOT NULL, "interest" numeric(19,4) NOT NULL, "accountNumberId" integer, CONSTRAINT "PK_fd76f64bff977874311b67cacc5" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "operation_type" ("created_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "type" character varying NOT NULL, "isDebt" boolean NOT NULL, CONSTRAINT "PK_c5621e6ce27a6c372695011e6d9" PRIMARY KEY ("type"))`);
            yield queryRunner.query(`CREATE TABLE "operation" ("created_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "id" SERIAL NOT NULL, "sum" numeric(19,4) NOT NULL, "details" character varying NOT NULL, "currencyCode" character varying(3) NOT NULL, "completedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "accounNumberId" integer, "operationTypeId" character varying, CONSTRAINT "REL_336eb067c8656c47302d9736ea" UNIQUE ("operationTypeId"), CONSTRAINT "PK_18556ee6e49c005fc108078f3ab" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "account" ("created_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "id" SERIAL NOT NULL, "principalDebt" numeric(19,4) NOT NULL, "interestDebt" numeric(19,4) NOT NULL, "outstandingPrincipal" numeric(19,4) NOT NULL, "outstandingInterestDebt" numeric(19,4) NOT NULL, "openingDate" TIMESTAMP NOT NULL, "closingDate" TIMESTAMP NOT NULL, "currencyCode" character varying(3) NOT NULL, "isActive" boolean NOT NULL, "creditId" integer, CONSTRAINT "REL_dc55c08acc980d296adb370f0c" UNIQUE ("creditId"), CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "card" ("created_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "cardNumber" character varying NOT NULL, "holderName" character varying(50) NOT NULL, "expirationDate" TIMESTAMP NOT NULL, "paymentSystem" character varying(30) NOT NULL, "balance" numeric(19,4) NOT NULL, "transactionLimit" numeric(19,4) NOT NULL, "status" "public"."card_status_enum" NOT NULL, "deliveryPoint" character varying(30) NOT NULL, "coBrand" character varying(30) NOT NULL, "isDigitalWallet" boolean NOT NULL, "isDigital" boolean NOT NULL, "accountNumberId" integer, CONSTRAINT "PK_8ebe167503f779123f14c35dd43" PRIMARY KEY ("cardNumber"))`);
            yield queryRunner.query(`ALTER TABLE "credit_order" ADD CONSTRAINT "FK_dcee9081365a9bb600fc3001dc6" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "credit" ADD CONSTRAINT "FK_1419df244809aa35d63a91c642a" FOREIGN KEY ("orderId") REFERENCES "credit_order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "agreement" ADD CONSTRAINT "FK_a905111b5268bc9c305a633dc65" FOREIGN KEY ("creditId") REFERENCES "credit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "payment_schedule" ADD CONSTRAINT "FK_4ca5ddfac5ccc7e86629fec75b3" FOREIGN KEY ("accountNumberId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "operation" ADD CONSTRAINT "FK_237aa5a855101b4c5e71424e104" FOREIGN KEY ("accounNumberId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "operation" ADD CONSTRAINT "FK_336eb067c8656c47302d9736ea1" FOREIGN KEY ("operationTypeId") REFERENCES "operation_type"("type") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "account" ADD CONSTRAINT "FK_dc55c08acc980d296adb370f0c6" FOREIGN KEY ("creditId") REFERENCES "credit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "card" ADD CONSTRAINT "FK_4237d1480e7862c444239d841f6" FOREIGN KEY ("accountNumberId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "card" DROP CONSTRAINT "FK_4237d1480e7862c444239d841f6"`);
            yield queryRunner.query(`ALTER TABLE "account" DROP CONSTRAINT "FK_dc55c08acc980d296adb370f0c6"`);
            yield queryRunner.query(`ALTER TABLE "operation" DROP CONSTRAINT "FK_336eb067c8656c47302d9736ea1"`);
            yield queryRunner.query(`ALTER TABLE "operation" DROP CONSTRAINT "FK_237aa5a855101b4c5e71424e104"`);
            yield queryRunner.query(`ALTER TABLE "payment_schedule" DROP CONSTRAINT "FK_4ca5ddfac5ccc7e86629fec75b3"`);
            yield queryRunner.query(`ALTER TABLE "agreement" DROP CONSTRAINT "FK_a905111b5268bc9c305a633dc65"`);
            yield queryRunner.query(`ALTER TABLE "credit" DROP CONSTRAINT "FK_1419df244809aa35d63a91c642a"`);
            yield queryRunner.query(`ALTER TABLE "credit_order" DROP CONSTRAINT "FK_dcee9081365a9bb600fc3001dc6"`);
            yield queryRunner.query(`DROP TABLE "card"`);
            yield queryRunner.query(`DROP TABLE "account"`);
            yield queryRunner.query(`DROP TABLE "operation"`);
            yield queryRunner.query(`DROP TABLE "operation_type"`);
            yield queryRunner.query(`DROP TABLE "payment_schedule"`);
            yield queryRunner.query(`DROP TABLE "agreement"`);
            yield queryRunner.query(`DROP TABLE "credit"`);
            yield queryRunner.query(`DROP TABLE "credit_order"`);
            yield queryRunner.query(`DROP TABLE "product"`);
        });
    }
}
exports.SomeNameTest1653053760060 = SomeNameTest1653053760060;

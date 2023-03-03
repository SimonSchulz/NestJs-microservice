import {MigrationInterface, QueryRunner} from "typeorm";

export class removeTypeColumn1677829373051 implements MigrationInterface {
    name = 'removeTypeColumn1677829373051'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "card" DROP COLUMN "type"`);
        await queryRunner.query(`DROP TYPE "public"."card_type_enum"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."card_type_enum" AS ENUM('CREDIT', 'DEBIT')`);
        await queryRunner.query(`ALTER TABLE "card" ADD "type" "public"."card_type_enum" NOT NULL`);
    }

}

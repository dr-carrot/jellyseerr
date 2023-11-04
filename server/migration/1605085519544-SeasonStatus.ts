import type { MigrationInterface, QueryRunner } from 'typeorm';
import { getAutoIncrementSyntax } from '@server/utils/dbIdioms';

const autoIncrementSyntax = getAutoIncrementSyntax();

export class SeasonStatus1605085519544 implements MigrationInterface {
  name = 'SeasonStatus1605085519544';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "season" ("id" ${autoIncrementSyntax} NOT NULL, "seasonNumber" integer NOT NULL, "status" integer NOT NULL DEFAULT (1), "createdAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, "mediaId" integer)`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "season"`);
  }
}

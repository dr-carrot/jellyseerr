import type { MigrationInterface, QueryRunner } from 'typeorm';
import { getAutoIncrementSyntax } from '@server/utils/dbIdioms';

const autoIncrementSyntax = getAutoIncrementSyntax();

export class AddDiscoverSlider1672041273674 implements MigrationInterface {
  name = 'AddDiscoverSlider1672041273674';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "discover_slider" ("id" ${autoIncrementSyntax} NOT NULL, "type" integer NOT NULL, "order" integer NOT NULL, "isBuiltIn" boolean NOT NULL DEFAULT (0), "enabled" boolean NOT NULL DEFAULT (1), "title" varchar, "data" varchar, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "discover_slider"`);
  }
}

import { isPgsql } from '@server/datasource';

export function getAutoIncrementSyntax(): string {
  if (isPgsql) {
    return 'SERIAL PRIMARY KEY';
  } else {
    return 'integer PRIMARY KEY AUTOINCREMENT';
  }
}

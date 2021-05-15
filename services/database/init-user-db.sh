#!/bin/bash
set -e

echo "Creating database $DB_NAME"
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE USER $DB_USER;
    CREATE DATABASE $DB_NAME;
    GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;
EOSQL

echo "Loading migration into $DB_NAME"
psql -d $DB_NAME -U $DB_USER < /db/migrations/V1__create_tables.sql
sleep 30
psql -d $DB_NAME -U $DB_USER < /db/migrations/V1__create_data.sql
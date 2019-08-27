#!/bin/bash
export PGPASSWORD='Myrk4382'

echo "configuring dragonstack database..."
dropdb -U postgres postgres
dropdb - U postgres dragonstackdb
createdb -U postgres dragonstackdb

psql.exe -U postgres dragonstackdb < ./bin/sql/generation.sql
psql.exe -U postgres dragonstackdb < ./bin/sql/dragon.sql

echo "dragonstackdb was configured successfully"

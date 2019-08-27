#!/bin/bash
export PGPASSWORD='node_password'
echo "configuring dragonstack database..."
dropdb -U node_user dragonstackdb
createdb -U node_user dragonstackdb

psql -U node_user dragonstackdb < ./bin/sql/generation.sql
psql -U node_user dragonstackdb < ./bin/sql/dragon.sql

echo "dragonstackdb was configured successfully"
echo press enter to exit
$SHELL
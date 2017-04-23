#!/bin/sh

DB_CONTAINER_NAME=postgresdb_local

function createDB {
  docker ps -a | grep $DB_CONTAINER_NAME
  if [ ! -z $? ]
  then
    docker rm -f $DB_CONTAINER_NAME
  fi

  docker run \
    --name $DB_CONTAINER_NAME \
    -p "5432:5432" \
    -e POSTGRES_USER=dsuser \
    -e POSTGRES_DB=graphql_test_development \
    -e POSTGRES_PASSWORD=mysecretpassword \
    -d \
    postgres:alpine
}

createDB

#!/usr/bin/env bash

if [ -z "$PREVIUSE_USERNAME" ] || [ -z "$PREVIUSE_PASSWORD" ]
then
  read -p 'username: ' PREVIUSE_USERNAME
  read -p 'password: ' PREVIUSE_PASSWORD
fi

generate_post_data()
{
  cat <<EOF
{
  "email":"$PREVIUSE_USERNAME", 
  "password":"$PREVIUSE_PASSWORD"
}
EOF
}

curl -X 'POST' \
  $PREVIUSE_HOST'/auth/jwt/create/' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d "$(generate_post_data)" | jq '.access'
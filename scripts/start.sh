#!/bin/sh

TOKEN=$(sh ./scripts/get-django-token.sh)

if [ -z "$TOKEN" ]
then
  echo "Django token was not set! Proxy to environments will NOT work" && exit 1
else
  export REACT_APP_AWS_TOKEN=$TOKEN && react-app-rewired start
fi

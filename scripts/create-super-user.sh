#!/usr/bin/env bash

docker exec \
  -e DJANGO_SUPERUSER_PASSWORD="$PREVIUSE_PASSWORD" \
  -it previuse-web-backend-1 python manage.py createsuperuser --no-input \
  --email "$PREVIUSE_USERNAME"

#!/usr/bin/env bash


build_auth() {
  echo 'building auth ui'

  cd "../previuse-ui-auth"
  npm run build
}

build_app() {
  echo 'building marketer ui'

  npm run build
}

remove_old_build_files() {
  echo 'remove old app_build static files from server'

  rm -rf ../previuse-web/previuse/templates/app_build/*
  
  echo 'remove old auth_build static files from server'

  rm -rf ../previuse-web/previuse/templates/auth_build/*
}

collectstatic() {
  echo 'copy auth app static files'

  cp -r ../previuse-ui-auth/build/* ../previuse-web/previuse/templates/auth_build/
  
  echo 'copy markerter app static files'

  cp -r ../previuse-ui-marketer/build/* ../previuse-web/previuse/templates/app_build/
}

if [ "$1" == "build" ]
then
  build_app
  build_auth
fi

remove_old_build_files
collectstatic

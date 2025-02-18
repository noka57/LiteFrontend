#!/bin/bash

# Check if an argument is provided
if [ $# -eq 0 ]; then
  echo "Usage: $0 <version>"
  exit 1
fi

version=$1

backend_folder="/home/noka/Desktop/LiteBackend/v$version"

webungzip_folder="$backend_folder/webfile_ungzip/"
webgzip_folder="$backend_folder/webfile_gzip/"

dashboard_filename="EDashboard.html"

mkdir -p $backend_folder
mkdir -p $webungzip_folder
mkdir -p $webgzip_folder

# This is a comment
cp -r .svelte-kit/output/client/. $webungzip_folder
cp -r .svelte-kit/output/client/. $webgzip_folder
cp -r $dashboard_filename $webungzip_folder
cp -r $dashboard_filename $webgzip_folder

uselessfile="$webgzip_folder""manifest.json"
uselessfile2="$webgzip_folder""_app/version.json"
rm $uselessfile
rm $uselessfile2


find $webgzip_folder -type f -exec chmod 777 {} +

find $webgzip_folder \( -name '*.css' -o -name '*.html' -o -name '*.js' \) -exec gzip --verbose {} \; -exec mv "{}.gz" "{}" \;

cd "$webgzip_folder"
mkdir -p "HtmlFile"
mv $dashboard_filename "HtmlFile/"

echo -e "%{\r\n#include <stdio.h>\r\n#include <stdlib.h>\r\n#include <string.h>\r\n%}">> ../gperffile/webfileGperf
echo -e "struct _WEB_FILE{\r\n\tconst char *name;\r\n\tunsigned int size;\r\n\tunsigned int type;\r\n\tconst char *realpath;\r\n};\r\n%%" >> ../gperffile/webfileGperf

find -maxdepth 1 -type f -printf "\"/%P\",%s,3,\"/usr/sbin/litebackendEW50v/%P\"\r\n" >> ../gperffile/webfileGperf

cd "HtmlFile"

find -maxdepth 1 -type f -printf "\"/%P\",%s,1,\"/usr/sbin/litebackendEW50v/%P\"\r\n" >> ../../gperffile/webfileGperf

mv $dashboard_filename "$webgzip_folder"

cd ..

rmdir "HtmlFile"

cd "_app/immutable/"

find -maxdepth 1 -type f -printf "\"/_app/immutable/%P\",%s,4,\"/usr/sbin/litebackendEW50v/_app/immutable/%P\"\r\n" >> ../../../gperffile/webfileGperf

cd "assets/"

find -maxdepth 1 -type f -printf "\"/_app/immutable/assets/%P\",%s,2,\"/usr/sbin/litebackendEW50v/_app/immutable/assets/%P\"\r\n" >> ../../../../gperffile/webfileGperf

cd ..
cd "chunks/"

find -maxdepth 1 -type f -printf "\"/_app/immutable/chunks/%P\",%s,4,\"/usr/sbin/litebackendEW50v/_app/immutable/chunks/%P\"\r\n" >> ../../../../gperffile/webfileGperf

cd ..
cd "pages/"

find -maxdepth 1 -type f -printf "\"/_app/immutable/pages/%P\",%s,4,\"/usr/sbin/litebackendEW50v/_app/immutable/pages/%P\"\r\n" >> ../../../../gperffile/webfileGperf

cd ..
cd ..
cd ..




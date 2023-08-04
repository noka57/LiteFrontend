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

mkdir -p $backend_folder
mkdir -p $webungzip_folder
mkdir -p $webgzip_folder

# This is a comment
cp -r .svelte-kit/output/client/. $webungzip_folder
cp -r .svelte-kit/output/client/. $webgzip_folder
cp -r "Eindex.html" $webungzip_folder
cp -r "Eindex.html" $webgzip_folder

uselessfile="$webgzip_folder""manifest.json"
uselessfile2="$webgzip_folder""_app/version.json"
rm $uselessfile
rm $uselessfile2


find $webgzip_folder -type f -exec chmod 777 {} +

find $webgzip_folder \( -name '*.css' -o -name '*.html' -o -name '*.js' \) -exec gzip --verbose {} \; -exec mv "{}.gz" "{}" \;

cd "$webgzip_folder"
mkdir -p "HtmlFile"
mv "Eindex.html" "HtmlFile/"

echo -e "%{\r\n#include <stdio.h>\r\n#include <stdlib.h>\r\n#include <string.h>\r\n%}\r\nstruct _WEB_FILE{\r\n\tconst char *name;\r\n\tunsigned int size;\r\n\tunsigned int type;\r\n};\r\n%%" >> ../gperffile/webfileGperf

find -maxdepth 1 -type f -printf "\"/%P\",%s,3\r\n" >> ../gperffile/webfileGperf

cd "HtmlFile"

find -maxdepth 1 -type f -printf "\"/%P\",%s,1\r\n" >> ../../gperffile/webfileGperf

mv "Eindex.html" "$webgzip_folder"

cd ..

rmdir "HtmlFile"

cd "_app/immutable/"

find -maxdepth 1 -type f -printf "\"/_app/immutable/%P\",%s,4\r\n" >> ../../../gperffile/webfileGperf

cd "assets/"

find -maxdepth 1 -type f -printf "\"/_app/immutable/assets/%P\",%s,2\r\n" >> ../../../../gperffile/webfileGperf

cd ..
cd "chunks/"

find -maxdepth 1 -type f -printf "\"/_app/immutable/chunks/%P\",%s,4\r\n" >> ../../../../gperffile/webfileGperf

cd ..
cd "pages/"

find -maxdepth 1 -type f -printf "\"/_app/immutable/pages/%P\",%s,4\r\n" >> ../../../../gperffile/webfileGperf

cd ..
cd ..
cd ..


echo -e "%%\r\n\r\nunsigned int get_webfile_size(const struct _WEB_FILE *p_webfile)\r\n{\r\n\tif (p_webfile == NULL) return 0;\r\n\telse return p_webfile->size;\r\n}\r\n\r\nunsigned int get_webfile_type(const struct _WEB_FILE *p_webfile)\r\n{\r\n\tif (p_webfile == NULL) return 0;\r\n\telse return p_webfile->type;\r\n}\r\n" >> ../gperffile/webfileGperf



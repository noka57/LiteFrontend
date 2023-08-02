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
uselessfile="$webgzip_folder""manifest.json"
uselessfile2="$webgzip_folder""_app/version.json"
rm $uselessfile
rm $uselessfile2


find $webgzip_folder -type f -exec chmod 777 {} +

find $webgzip_folder \( -name '*.css' -o -name '*.html' -o -name '*.js' \) -exec gzip --verbose {} \; -exec mv "{}.gz" "{}" \;

cd "$webgzip_folder"

echo -e "%{\r\n#include <stdio.h>\r\n#include <stdlib.h>\r\n#include <string.h>\r\n%}\r\nstruct _WEB_FILE{\r\n\tconst char *name;\r\n\tunsigned int size;\r\n\tunsigned int type;\r\n};\r\n%%" >> ../gperffile/webfileGperf

find -maxdepth 1 -type f -printf "\"/%P\",%s,3\r\n" >> ../gperffile/webfileGperf

echo -e "%%\r\n\r\nunsigned int get_webfile_size(const struct _WEB_FILE *p_webfile)\r\n{\r\n\tif (p_webfile == NULL) return 0;\r\n\telse return p_webfile->size;\r\n}\r\n\r\nunsigned int get_webfile_type(const struct _WEB_FILE *p_webfile)\r\n{\r\n\tif (p_webfile == NULL) return 0;\r\n\telse return p_webfile->type;\r\n}\r\n" >> ../gperffile/webfileGperf



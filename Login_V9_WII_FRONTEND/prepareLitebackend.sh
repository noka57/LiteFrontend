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

index_filename="index.html"

mkdir -p $backend_folder
mkdir -p $webungzip_folder
mkdir -p $webgzip_folder


tmpfilefolder="tmp/"
mkdir -p $tmpfilefolder


cp -r public/. $webungzip_folder
cp -r public/. $tmpfilefolder

uselessfile="$tmpfilefolder""build/bundle.js.map"
uselessfile2="$tmpfilefolder""favicon.png"

rm $uselessfile 
rm $uselessfile2


find $tmpfilefolder -type f -exec chmod 777 {} +

find $tmpfilefolder \( -name '*.css' -o -name '*.html' -o -name '*.js' \) -exec gzip --verbose {} \; -exec mv "{}.gz" "{}" \;


cp -r "$tmpfilefolder""." "$webgzip_folder"

cd "$webgzip_folder"

find -maxdepth 1 -type f -name "Login_2.png" -printf "\"/%P\",%s,3,\"/usr/sbin/litebackendAP2/%P\"\r\n" >> ../gperffile/webfileGperf
find -maxdepth 1 -type f -name "index.html" -printf "\"/%P\",%s,1,\"/usr/sbin/litebackendAP2/%P\"\r\n" >> ../gperffile/webfileGperf
find -maxdepth 1 -type f -name "global.css" -printf "\"/%P\",%s,2,\"/usr/sbin/litebackendAP2/%P\"\r\n" >> ../gperffile/webfileGperf
find -mindepth 2 -type f -name "bundle.js" -printf "\"/%P\",%s,4,\"/usr/sbin/litebackendAP2/%P\"\r\n" >> ../gperffile/webfileGperf
find -mindepth 2 -type f -name "bundle.css" -printf "\"/%P\",%s,2,\"/usr/sbin/litebackendAP2/%P\"\r\n" >> ../gperffile/webfileGperf
start mongo 127.0.0.1:27018/firestone-data --eval "db.dropDatabase(); db.getSiblingDB('firestone-data');" "./bin/initFirestoneData.js"
start serve -s -l 3648 client-news
cd news
start app.exe
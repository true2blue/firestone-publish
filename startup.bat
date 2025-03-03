setx FR_DB firestone
set FR_DB=firestone
start mongod --dbpath C:/data/db
start mongod --storageEngine inMemory --port 27018 --dbpath C:/data/dbram
timeout 5
start mongo 127.0.0.1:27018/firestone-data --eval "db.dropDatabase(); db.getSiblingDB('firestone-data');" "./bin/initFirestoneData.js"
start serve -s client
cd server && node index.js
mongo 127.0.0.1/firestone --eval "db.dropDatabase(); db.getSiblingDB('firestone');" "init.js" && exit
REM mongoimport -d firestone -c codes "codes.json"
REM mongoimport -d firestone -c concepts "concepts.json"
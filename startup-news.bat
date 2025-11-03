setx FR_DB firestone
set FR_DB=firestone
start mongod --dbpath C:/data/db
start mongod --storageEngine inMemory --port 27018 --dbpath C:/data/dbram
timeout 5
start serve -s -l 3648 client-news
cd news
start app.exe
start getRealtimeNews.exe
start clean-news-data.bat
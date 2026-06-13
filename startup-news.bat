setx FR_DB firestone
set FR_DB=firestone
if exist "news\log" (
    pushd "news\log"
    del /f /q *.* >nul 2>&1
    for /d %%D in (*) do rd /s /q "%%D" >nul 2>&1
    popd
)
start "" /B mongod --dbpath C:/data/db
timeout 5
start "" /B serve -s -l 3648 client-news
start "" /B clean-news-data.bat
cd news
start "" /B app.exe
start "" /B getRealtimeNews.exe
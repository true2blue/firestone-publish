cd ..\firestone-news
xcopy config\config.ini ..\firestone-publish\news\config /i /e /y
xcopy driver\*.* ..\firestone-publish\news\driver /i /e /y
xcopy prompt\*.* ..\firestone-publish\news\prompt /i /e /y
cd venv\Scripts && .\activate.bat && cd ..\.. && pip install pyinstaller && pyinstaller --onefile src/app.py && xcopy dist\app.exe ..\firestone-publish\news /i /e /y && pyinstaller --onefile src/getRealtimeNews.py && xcopy dist\getRealtimeNews.exe ..\firestone-publish\news /i /e /y && del ..\firestone-publish\news\logs\*.* /Q && exit
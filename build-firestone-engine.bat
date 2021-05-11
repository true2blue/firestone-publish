cd ..\firestone-engine
git pull
xcopy lib\trading.py C:\Users\Administrator\.virtualenvs\firestone-engine-bHojJoF3\Lib\site-packages\tushare\stock /i /e /y
pipenv run pyinstaller -F --clean main.spec
pipenv run pyinstaller -F --clean calculate.spec
xcopy dist\main.exe ..\firestone-server\shell /i /e /y
xcopy dist\calculate.exe ..\firestone-server\shell /i /e /y
cd ..\firestone-server
xcopy shell ..\firestone-publish\server\shell /i /e /y
mkdir ..\firestone-publish\server\shell\logs
del ..\firestone-publish\server\shell\logs\*.* /Q && exit
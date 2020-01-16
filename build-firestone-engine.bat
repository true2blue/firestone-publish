cd ..\firestone-engine
git pull
pipenv run pyinstaller -F --clean main.spec
pipenv run pyinstaller -F --clean calculate.spec
xcopy dist\main.exe ..\firestone-server\shell /i /e /y
xcopy dist\calculate.exe ..\firestone-server\shell /i /e /y 
cd ..\firestone-server
xcopy shell ..\firestone-publish\server\shell /i /e /y
del ..\firestone-publish\server\shell\logs\*.* /Q && exit
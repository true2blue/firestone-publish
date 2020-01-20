REM load init data
RMDIR bin /S /Q && MKDIR bin
cd ..\firestone-server && git pull && cd ..\firestone-publish
xcopy ..\firestone-server\install\init.js bin\ /i /e /y
xcopy ..\firestone-server\install\init.bat bin\ /i /e /y
xcopy ..\firestone-server\install\codes.json bin\ /i /e /y
xcopy ..\firestone-server\install\concepts.json bin\ /i /e /y
cd bin && start /W init.bat && cd..

REM build firestone
start /W build-firestone.bat

REM build firestone-server
start /W build-firestone-server.bat

REM build firestone-engine
start /W build-firestone-engine.bat

REM zip file
del firestone-v1.0.zip /Q
7z a -tzip firestone-v1.0.zip bin client server README.md startup.bat
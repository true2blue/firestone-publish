rem REM build firestone
start /W build-firestone.bat

rem REM build firestone-server
start /W build-firestone-server.bat

REM build firestone-engine
start /W build-firestone-engine.bat

7z a -tzip firestone-v1.0.zip bin client server README.md startup.bat
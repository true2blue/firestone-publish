RMDIR server /S /Q
cd ..\firestone-server
rem git pull
npm run build && xcopy dist ..\firestone-publish\server /i /e /y && exit

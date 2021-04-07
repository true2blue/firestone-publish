RMDIR server /S /Q
cd ..\firestone-server
npm run build && xcopy dist ..\firestone-publish\server /i /e /y && xcopy node_modules ..\firestone-publish\server\node_modules /i /e /y && copy .env ..\firestone-publish\server /y && exit

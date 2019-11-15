cd ..\firestone-server
npm run build && xcopy dist ..\firestone-publish\server /i /e /y && exit

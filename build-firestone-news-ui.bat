RMDIR client-news /S /Q
cd ..\firestone-news-ui
git pull
npm run build && xcopy dist ..\firestone-publish\client-news /i /e /y && exit

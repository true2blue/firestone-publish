RMDIR client /S /Q
cd ..\firestone
git pull
npm run build && xcopy dist ..\firestone-publish\client /i /e /y && exit
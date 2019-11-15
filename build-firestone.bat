cd ..\firestone
npm run build && xcopy dist ..\firestone-publish\client /i /e /y && exit

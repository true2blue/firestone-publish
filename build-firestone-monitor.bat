cd ..\firestone-monitor
git pull
cd venv\Scripts && .\activate.bat && cd ..\.. && pip install pyinstaller && pyinstaller --onefile src/MonitorData.py && xcopy dist\MonitorData.exe ..\firestone-publish\monitor\ /i /e /y && exit
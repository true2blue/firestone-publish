@echo off
setx FR_DB firestone
set FR_DB=firestone

setlocal enabledelayedexpansion

:: Get current date in yyyy-mm-dd format
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set ldt=%%I
set year=!ldt:~0,4!
set month=!ldt:~4,2!
set day=!ldt:~6,2!

:: Drop collections older than 7 days (from day-8 to day-30 for example)
:: Adjust the upper bound (e.g., 60) to how far back you want to clean
for /L %%i in (8,1,30) do (
    call :GetPastDate !year! !month! !day! %%i
    echo Dropping collection: news-!pastdate!
    mongo 127.0.0.1:27017/firestone --eval "db.getCollection('news-!pastdate!').drop();"
)

goto :eof

:: --------------------------------------------
:: Function: GetPastDate yyyy mm dd days_ago
:: --------------------------------------------
:GetPastDate
setlocal
set "y=%1"
set "m=%2"
set "d=%3"
set "daysago=%4"

:: Use PowerShell for correct date calculation
for /f %%D in ('powershell -NoProfile -Command "(Get-Date -Year %y% -Month %m% -Day %d%).AddDays(-%daysago%).ToString(\"yyyy-MM-dd\")"') do set datecalc=%%D

endlocal & set "pastdate=%datecalc%"
goto :eof
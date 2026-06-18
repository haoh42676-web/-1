@echo off
setlocal
set PORT=3030
powershell -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-local.ps1"

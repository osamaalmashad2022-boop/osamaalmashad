@echo off
title Osama Almashad Portfolio Dev Server
echo ===================================================
echo   Starting Osama Almashad Portfolio...
echo ===================================================

:: Check if node_modules folder exists
if not exist "node_modules\" (
    echo [INFO] node_modules not found. Installing dependencies first...
    call npm install
)

:: Start dev server
echo [INFO] Starting Next.js Dev Server on http://localhost:3000 ...
start cmd /k "npm run dev"

:: Wait a moment for server to initialize, then open in browser
timeout /t 3 /nobreak >nul
start http://localhost:3000

echo ===================================================
echo   Development server is running in a new window!
echo ===================================================
pause

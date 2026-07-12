Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "  Starting Osama Almashad Portfolio..." -ForegroundColor Cyan
Write-Host "===================================================" -ForegroundColor Cyan

if (-not (Test-Path "node_modules")) {
    Write-Host "[INFO] node_modules not found. Installing dependencies..." -ForegroundColor Yellow
    npm install
}

Write-Host "[INFO] Starting Next.js Dev Server on http://localhost:3000 ..." -ForegroundColor Green
Start-Process cmd -ArgumentList "/k npm run dev"

Start-Sleep -Seconds 3
Start-Process "http://localhost:3000"

Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "  Development server is running!" -ForegroundColor Green
Write-Host "===================================================" -ForegroundColor Cyan

@echo off
chcp 65001 > nul
echo ==========================================================
echo 🚀 TỰ ĐỘNG ĐẨY CODE LÊN GITHUB & DEPLOY LÊN VERCEL (100%%)
echo ==========================================================
echo.

cd /d "C:\Users\HNBV3384\.gemini\antigravity\scratch\toan-quoc-te"

set GIT_PATH="%LOCALAPPDATA%\Programs\Git\cmd\git.exe"

echo 1. Kiểm tra thay đổi...
%GIT_PATH% add .

echo 2. Đóng gói cập nhật (Commit)...
%GIT_PATH% commit -m "Auto update fix & deploy: %date% %time%"

echo 3. Đẩy lên GitHub (Push origin main)...
%GIT_PATH% push origin main

echo.
echo ==========================================================
echo 🎉 XONG! Vercel đang tự động cập nhật web trong 15 giây.
echo ==========================================================
echo.
pause

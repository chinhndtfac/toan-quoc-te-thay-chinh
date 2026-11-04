
Add-Type -AssemblyName System.IO.Compression.FileSystem
$src = "C:\Users\HNBV3384\.gemini\antigravity\scratch\toan-quoc-te"
$zipPath = "C:\Users\HNBV3384\Desktop\toan-quoc-te-thay-chinh.zip"

if (Test-Path $zipPath) {
    Remove-Item $zipPath -Force
}

[System.IO.Compression.ZipFile]::CreateFromDirectory($src, $zipPath)
Write-Host "Backup created at $zipPath"

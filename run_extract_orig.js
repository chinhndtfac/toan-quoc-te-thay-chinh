const fs = require('fs');
const cp = require('child_process');

const ps = `
Add-Type -AssemblyName System.IO.Compression.FileSystem
$z = [System.IO.Compression.ZipFile]::OpenRead('C:\\Users\\HNBV3384\\Desktop\\toan-quoc-te-thay-chinh.zip')
$entry = $z.Entries | Where-Object { $_.Name -eq 'grade4_special.js' }
[System.IO.Compression.ZipFileExtensions]::ExtractToFile($entry, 'C:\\Users\\HNBV3384\\.gemini\\antigravity\\scratch\\toan-quoc-te\\grade4_special_orig.js', $true)
$z.Dispose()
Write-Host "Extracted!"
`;
fs.writeFileSync('C:\\Users\\HNBV3384\\.gemini\\antigravity\\scratch\\toan-quoc-te\\extract_orig.ps1', ps, 'utf8');
cp.execSync('powershell -ExecutionPolicy Bypass -File C:\\Users\\HNBV3384\\.gemini\\antigravity\\scratch\\toan-quoc-te\\extract_orig.ps1');
console.log('Extracted orig!');

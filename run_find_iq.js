const cp = require('child_process');
const fs = require('fs');

const psScript = `
param([string]$zipPath)
Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead($zipPath)
$zip.Entries | Where-Object { $_.FullName.Contains("MATH IQ") } | ForEach-Object {
    Write-Host $_.FullName
}
$zip.Dispose()
`;

fs.writeFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/find_iq.ps1', psScript, 'utf8');

const p = cp.spawnSync('powershell', [
  '-ExecutionPolicy', 'Bypass',
  '-File', 'C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/find_iq.ps1',
  'V:/ChinhND/Đề ôn tập/04. NC 2017 (G4)-20261102T110830Z-1-001.zip'
], { encoding: 'utf8' });

console.log(p.stdout);

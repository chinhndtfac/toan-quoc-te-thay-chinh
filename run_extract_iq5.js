const cp = require('child_process');
const fs = require('fs');

const psScript = `
param([string]$zipPath, [string]$outDir)
Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead($zipPath)
foreach ($entry in $zip.Entries) {
    if ($entry.FullName.Contains("05_MATH IQ LEVEL 2")) {
        $dest = Join-Path $outDir $entry.Name
        Write-Host "Extracting:" $entry.Name
        [System.IO.Compression.ZipFileExtensions]::ExtractToFile($entry, $dest, $true)
    }
}
$zip.Dispose()
`;

fs.writeFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/extract_iq5.ps1', psScript, 'utf8');

const outDir = 'C:/Users/HNBV3384/.gemini/antigravity/scratch/iq5';

const p = cp.spawnSync('powershell', [
  '-ExecutionPolicy', 'Bypass',
  '-File', 'C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/extract_iq5.ps1',
  'V:/ChinhND/Đề ôn tập/04. NC 2017 (G4)-20261102T110830Z-1-001.zip',
  outDir
], { encoding: 'utf8' });

console.log(p.stdout);

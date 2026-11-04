
param([string]$zipPath)
Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead($zipPath)
$zip.Entries | Where-Object { $_.FullName.Contains("MATH IQ") } | ForEach-Object {
    Write-Host $_.FullName
}
$zip.Dispose()


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

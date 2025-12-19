
# Resize-Result.ps1
param (
    [string]$Directory = "public",
    [int]$MaxWidth = 800,
    [int]$Quality = 75
)

Add-Type -AssemblyName System.Drawing

function Optimize-Image {
    param ($Path)
    
    try {
        $img = [System.Drawing.Image]::FromFile($Path)
        
        # Calculate new dimensions
        $newWidth = $img.Width
        $newHeight = $img.Height
        
        if ($img.Width -gt $MaxWidth) {
            $newWidth = $MaxWidth
            $newHeight = [math]::Round($img.Height * ($MaxWidth / $img.Width))
        }

        $bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
        $graph = [System.Drawing.Graphics]::FromImage($bmp)
        $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graph.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graph.DrawImage($img, 0, 0, $newWidth, $newHeight)
        
        # Encoder for JPEG
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
        $encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $Quality)
        
        # New filename
        $dir = Split-Path $Path
        $name = [System.IO.Path]::GetFileNameWithoutExtension($Path)
        $newPath = Join-Path $dir "$name.jpg"
        
        $bmp.Save($newPath, $codec, $encParams)
        
        $img.Dispose()
        $bmp.Dispose()
        $graph.Dispose()
        
        Write-Host "Converted: $Path -> $newPath"
    } catch {
        Write-Host "Error processing $Path : $_"
    }
}

# Target specific folders to ensure uniformity
$folders = @("public/aquabreeze", "public/aqualite")

foreach ($folder in $folders) {
    if (Test-Path $folder) {
        $files = Get-ChildItem -Path $folder -Recurse -Include *.png, *.webp
        foreach ($file in $files) {
            Optimize-Image -Path $file.FullName
        }
    }
}

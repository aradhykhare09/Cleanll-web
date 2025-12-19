
# Convert-WebP-WPF.ps1
Add-Type -AssemblyName PresentationCore
Add-Type -AssemblyName PresentationFramework
Add-Type -AssemblyName WindowsBase

function Convert-WebP-To-Jpg {
    param (
        [string]$InputPath,
        [int]$MaxWidth = 800
    )

    try {
        $uri = New-Object System.Uri("file://$InputPath")
        $decoder = [System.Windows.Media.Imaging.BitmapDecoder]::Create(
            $uri, 
            [System.Windows.Media.Imaging.BitmapCreateOptions]::PreservePixelFormat, 
            [System.Windows.Media.Imaging.BitmapCacheOption]::OnLoad
        )

        $frame = $decoder.Frames[0]
        $width = $frame.PixelWidth
        $height = $frame.PixelHeight
        
        # Resize logic
        if ($width -gt $MaxWidth) {
            $scale = $MaxWidth / $width
            $targetWidth = $MaxWidth
            $targetHeight = [math]::Round($height * $scale)
            
            $transformed = New-Object System.Windows.Media.Imaging.TransformedBitmap
            $transformed.BeginInit()
            $transformed.Source = $frame
            $transformed.Transform = New-Object System.Windows.Media.ScaleTransform($scale, $scale)
            $transformed.EndInit()
            
            $source = $transformed
        } else {
            $source = $frame
        }
        
        $encoder = New-Object System.Windows.Media.Imaging.JpegBitmapEncoder
        $encoder.QualityLevel = 75
        $encoder.Frames.Add([System.Windows.Media.Imaging.BitmapFrame]::Create($source))
        
        $dir = Split-Path $InputPath
        $name = [System.IO.Path]::GetFileNameWithoutExtension($InputPath)
        $outputPath = Join-Path $dir "$name.jpg"
        
        $stream = [System.IO.File]::Open($outputPath, [System.IO.FileMode]::Create)
        $encoder.Save($stream)
        $stream.Close()
        
        Write-Host "Converted: $InputPath -> $outputPath"
    } catch {
        Write-Host "Error converting $InputPath : $_"
    }
}

# Process Aquabreeze
$aquabreeze = Get-ChildItem "public/aquabreeze/*.webp"
foreach ($file in $aquabreeze) {
    Convert-WebP-To-Jpg -InputPath $file.FullName
}

# Process Aqualite
$aqualite = Get-ChildItem "public/aqualite/*.webp"
foreach ($file in $aqualite) {
    Convert-WebP-To-Jpg -InputPath $file.FullName
}

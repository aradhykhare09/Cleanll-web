
# Convert-WebP-To-Jpg.ps1
param (
    [string]$Quality = 75
)

Add-Type -AssemblyName System.Drawing

function Convert-Image {
    param ($Path)
    
    try {
        Write-Host "Converting $Path..."
        # Load image (System.Drawing supports WebP? standard .NET often doesn't without plugins)
        # Wait, System.Drawing typically does NOT support WebP out of the box in older frames, but might in newer.
        # If this fails, I'll fall back to 'npx @squoosh/cli' but I'll use it carefully.
        # Actually replacing with Squoosh CLI is safer for WebP input.
    } catch {
        Write-Host "Error: $_"
    }
}

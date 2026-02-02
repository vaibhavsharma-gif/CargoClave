$images = @{
    "saf-aviation.jpg"           = "https://images.unsplash.com/photo-1436891620584-47fd0e565afb?q=80&w=1000&auto=format&fit=crop"
    "hydrogen-truck.jpg"         = "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1000&auto=format&fit=crop"
    "middle-corridor.jpg"        = "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=1000&auto=format&fit=crop"
    "shipping-alliance.jpg"      = "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1000&auto=format&fit=crop"
    "south-china-sea.jpg"        = "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=1000&auto=format&fit=crop"
    "resilience-index.jpg"       = "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop"
    "resilience-engineering.jpg" = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop"
    "circular-data.jpg"          = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop"
    "logistics-influencer.jpg"   = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop"
}

$destDir = "c:\Users\VaibhavSharma\.gemini\antigravity\CargoClave\cargo-clave-web\public\assets\images"
if (!(Test-Path -Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force
}

[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

foreach ($name in $images.Keys) {
    $url = $images[$name]
    $output = Join-Path -Path $destDir -ChildPath $name
    Write-Host "Downloading $name..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $output -UserAgent "Mozilla/5.0"
        Write-Host "Successfully downloaded $name"
    }
    catch {
        Write-Error "Failed to download $name : $_"
    }
}

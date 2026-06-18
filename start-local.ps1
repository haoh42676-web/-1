$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$nodePath = "C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
$port = if ($env:PORT) { $env:PORT } else { "3030" }

Set-Location $projectRoot
$env:PORT = $port

Write-Host "Starting Mirror Muse on http://127.0.0.1:$port"
& $nodePath "server.js"

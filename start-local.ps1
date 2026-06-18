$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$candidateNodePaths = @(
  "C:\Users\Administrator\AppData\Local\Programs\nodejs-v24.16.0\node.exe",
  "C:\Users\Administrator\AppData\Local\Programs\nodejs-portable\node-v24.16.0-win-x64\node.exe",
  "C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
)
$port = if ($env:PORT) { $env:PORT } else { "3030" }

$nodePath = $candidateNodePaths | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $nodePath) {
  throw "Node.js was not found. Please install Node.js first."
}

Set-Location $projectRoot
$env:PORT = $port

Write-Host "Starting Mirror Muse on http://127.0.0.1:$port"
& $nodePath "server.js"

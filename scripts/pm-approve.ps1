<#
.SYNOPSIS
  PM Agent: record approval for the next gated push (writes .agent/push-approved.json).
#>
param(
    [Parameter(Mandatory = $true)]
    [string] $Feature,

    [string] $Notes = ""
)

$ErrorActionPreference = "Stop"
$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$agentDir = Join-Path $root ".agent"
if (-not (Test-Path $agentDir)) {
    New-Item -ItemType Directory -Path $agentDir | Out-Null
}

$payload = [ordered]@{
    approvedAt = (Get-Date).ToUniversalTime().ToString("o")
    feature    = $Feature
    notes      = $Notes
    approvedBy = "PM"
    project    = "akash-master-tracker"
}

$path = Join-Path $agentDir "push-approved.json"
$payload | ConvertTo-Json -Depth 5 | Set-Content -Path $path -Encoding UTF8

Write-Host "PM approval recorded: $path"
Write-Host "Feature: $Feature"
if ($Notes) { Write-Host "Notes: $Notes" }

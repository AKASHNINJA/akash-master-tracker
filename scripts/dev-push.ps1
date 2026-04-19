<#
.SYNOPSIS
  Senior Developer: push to origin only if PM approval exists (or -Force).
#>
param(
    [string] $Branch = "",
    [switch] $Force
)

$ErrorActionPreference = "Stop"
$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$approvalPath = Join-Path $root ".agent\push-approved.json"

if (-not $Force) {
    if (-not (Test-Path $approvalPath)) {
        Write-Error "No PM approval found. Run: .\scripts\pm-approve.ps1 -Feature <slug> -Notes <text>`nOr -Force for emergencies."
        exit 1
    }
}

Set-Location $root

if (-not (Test-Path (Join-Path $root ".git"))) {
    Write-Error "Not a git repository."
}

$status = git status --porcelain
if ($status) {
    Write-Host "Uncommitted changes - commit or stash before push."
    git status -sb
    exit 1
}

if ($Branch) {
    git push -u origin $Branch
}
else {
    $current = git rev-parse --abbrev-ref HEAD
    git push -u origin $current
}

if (-not $Force -and (Test-Path $approvalPath)) {
    Remove-Item $approvalPath -Force
    Write-Host "Consumed PM approval stamp."
}

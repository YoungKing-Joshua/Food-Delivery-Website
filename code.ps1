$files = @(
 "./app/[category]/page.tsx",
 "./app/cart/page.tsx",
 "./app/LoginPage/page.tsx",
 "./app/menu/page.tsx",
 "./app/orders/page.tsx",
  "./app/product/[id]/page.tsx",
   "./app/page.tsx",
 "./app/globals.css",
  "./app/layout.tsx",
  "./components/Carticon.tsx",
  "./components/Featured.tsx",
  "./components/Footers.tsx",
  "./components/Menu.tsx",
  "./components/Navbar.tsx",
  "./components/Notification.tsx",
  "./components/Offer.tsx",
  "./components/Slider.tsx"
)

$output = "combined-output.txt"

Remove-Item $output -ErrorAction SilentlyContinue

foreach ($file in $files) {
    if (Test-Path $file) {
        Add-Content $output $file
        Get-Content $file | Add-Content $output
        Add-Content $output "`r`n`r`n"
    } else {
        Add-Content $output "$file (File not found)"
        Add-Content $output "`r`n`r`n"
    }
}

Write-Host "✅ Files merged into combined-output.txt"

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <title>Laravel Admin Template</title>
    
    @viteReactRefresh
    @vite('resources/scripts/admin.jsx')
  
  </head>
  <body>
    <div id="admin"></div>
  </body>
</html>
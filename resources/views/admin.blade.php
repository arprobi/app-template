<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <title>Laravel Admin</title>
    
    @viteReactRefresh
    @vite('resources/scripts/admin/src/index.jsx')
  
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
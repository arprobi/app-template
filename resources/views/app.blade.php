<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <title>Laravel UI Template</title>
    
    @viteReactRefresh
    @vite('resources/scripts/app/src/index.jsx')
  
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
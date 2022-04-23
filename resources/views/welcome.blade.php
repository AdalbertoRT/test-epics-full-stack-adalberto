<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laravel React</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <script src="{{ asset('js/popper.js') }}" defer></script>
    <script src="{{ asset('js/bootstrap.js') }}" defer></script>
    <script src="{{ asset('js/app.js') }}" defer></script>
</head>

<body>
    <div id="app"></div>
</body>

</html>
<?php
// echo date("l, d-M-Y");
// echo time();
// echo date('l', time()+60*60*24*20);
// phpinfo();


// ser Definition Function
function salam($waktu = "Datang", $nama = "Admin"){
    return "Selamat $waktu, $nama!";
}
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Function</title>
</head>
<body>
    <h1><?= salam("Pagi"); ?></h1>
</body>
</html>
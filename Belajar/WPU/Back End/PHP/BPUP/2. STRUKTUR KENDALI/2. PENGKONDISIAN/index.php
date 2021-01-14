<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PENGKONDISIAN</title>
</head>

<body>
    <?php
    // Pengkondisian / Percabangan
    // if else, if else if else, ternary, switch

    // if else
    // $x = 10;
    // if ($x < 10){
    //     echo "Benar";
    // }else {
    //     echo "salah";
    // }

    // if else if else
    // $x = 20;
    // if ($x < 20){
    //     echo "Benar";
    // }else if ($x == 20){
    //     echo "👌";
    // }else {
    //     echo "salah";
    // }

    // Ternary
    // $x = 20;
    // $x = ($x == 10) ? $x*10 : $x/10;
    // echo $x;

    // switch
    $x = 20;
    switch ($x) {
        case "10":
            echo 'Nilai $x = ' . "$x";
            break;
        case "20":
            echo 'Nilai $x = ' . "$x";
            break;
        default:
            echo "default";
            break;
    }
    ?>
</body>

</html>
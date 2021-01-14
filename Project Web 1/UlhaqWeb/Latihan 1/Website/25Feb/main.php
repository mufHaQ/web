<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <div class="style-div-1-text">
        <h1 id="hke1" align="center">Pertemuan Tanggal 25 Februari</h1>

        <hr>
        <hr>
        <br><br><br>
    </div><br><br>

    <div>
        <?php
        // Variable || bisa pakai "" atau ''
        // dibawah ini contoh penggabungan variable 
        // $var1 = "pertama ";
        // $var2 = "kedua";
        // echo $var1 . $var2;
        // echo '<br><br>';

        // $varnagka1 = 50;
        // $varnagka2 = 3;
        // echo $varnagka1 / $varnagka2;
        // echo '<br><br>';


        //  dibawah ini contoh operasi matematika
        // $angka1 = " 3";
        // $angka2 = "2";
        // echo $angka1 + $angka2;
        // echo '<br><br>';


        // array
        // $arr = array("satu", "dua", "tiga");
        // $arr2 = [1, 2, 3];
        // print_r($arr);
        // echo $arr2[1];
        // echo '<br><br>';


        // associative array
        // $array = array(
        //     "first" => "pertama",
        //     "second" => "kedua"
        // );
        // echo $array["second"];
        // echo '<br><br>';


        // multidimensi array
        // $mdArray = array(
        //     array("satuu", "duaa"),
        //     array("one", "two")
        // );
        // echo $mdArray[1][0];

        echo "Anggota Keluarga";
        echo '<br><br>';
        $mdArray = array(
            array("- nama : "),
            array("kakek : ", "nenek : ", "ayah : ", "ibu : ", "saya : ", "adik : "),
            array("umur : "),
            array("70", "68", "40", "38", "15", "10"),
            array("Kamsirun, ", "(alm)Saidah, ", "mufthonuddin, ", "eliyati, ", "dliyaulhaq, ", "nahiltursina, ")
        );
        echo $mdArray[0][0] . $mdArray[1][0] . $mdArray[4][0] . $mdArray[2][0]. $mdArray[3][0];
        echo '<br>';
        echo $mdArray[0][0] . $mdArray[1][1] . $mdArray[4][1] . $mdArray[2][0]. $mdArray[3][1];
        echo '<br>';
        echo $mdArray[0][0] . $mdArray[1][2] . $mdArray[4][2] . $mdArray[2][0]. $mdArray[3][2];
        echo '<br>';
        echo $mdArray[0][0] . $mdArray[1][3] . $mdArray[4][3] . $mdArray[2][0]. $mdArray[3][3];
        echo '<br>';
        echo $mdArray[0][0] . $mdArray[1][4] . $mdArray[4][4] . $mdArray[2][0]. $mdArray[3][4];
        echo '<br>';
        echo $mdArray[0][0] . $mdArray[1][5] . $mdArray[4][5] . $mdArray[2][0]. $mdArray[3][5];
        echo '<br>';

        ?>
    </div>

</body>

</html>
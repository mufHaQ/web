<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>1</title>

    <style>

        .ganjil {
            color: red;
        }

        .genap {
            color: green;
        }
    </style>
</head>

<body>
    <center>
        <!-- Style 1 -->
        <table border="1" cellpadding="10" cellspacing="5">
            <?php
            for ($i = 1; $i <= 5; $i++) {
                echo "<tr>";
                for ($j = 1; $j <= 20; $j++) {
                    echo "<td>$i, $j</td>";
                }
                echo "</tr>";
            }
            ?>
        </table>

        <br><br>

        <!-- Style 2 -->
        <table border="1" cellpadding="10" cellspacing="5">
            <?php for ($i = 1; $i <= 5; $i++) : ?>
                <?php if ($i % 2 == 1) : ?>
                    <tr class="ganjil">
                <?php else : ?>
                    <tr>
                <?php endif; ?>
                    <?php for ($j = 1; $j <= 20; $j++) : ?>
                        <td>
                            <!-- Jika tag php hanya digunakan untuk menampikan sebuah variable, bisa menggunakan seperti dibawah -->
                            <?php if ($i %2 == 1) {?>
                            <p class="ganjil"><?= "$i, $j" ?></p>
                            <?php } else{?>
                                <p class="genap"><?= "$i, $j" ?></p>
                            <?php } ?>
                        </td>
                    <?php endfor; ?>
                    </tr>
                <?php endfor; ?>
        </table>
    </center>
</body>

</html>
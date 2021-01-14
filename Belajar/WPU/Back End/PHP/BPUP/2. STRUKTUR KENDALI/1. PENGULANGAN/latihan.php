<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Latihan</title>

    <style>
        td {
            text-align: center;
        }

        .ganjil {
            background-color: silver;
        }

        .genap {
            background-color: salmon;
        }
    </style>
</head>

<body>
    <!-- Cara 1 -->
    <!-- <table border="1" cellpadding="10" cellspacing="0">
        <?php
        for ($i = 1; $i <= 10; $i++) {
            echo "<tr>";
            for ($j = 1; $j <= 5; $j++) {
                echo "<td>$i, $j</td>";
            }
            echo "</tr>";
        }
        ?>
    </table> -->









    <!-- Cara 2 -->
    <table border="1" cellpadding="10" cellspacing="0">
        <?php for ($i = 1; $i <= 15; $i++) : ?>
            <?php if ($i % 2 == 0) : ?>
                <tr class="genap">
                <?php else : ?>
                <tr class="ganjil">
                <?php endif; ?>
                <?php for ($j = 1; $j <= 10; $j++) : ?>
                    <td>
                        <?= "$i, $j"; ?>
                    </td>
                <?php endfor; ?>
                </tr>
            <?php endfor; ?>
    </table>
</body>

</html>
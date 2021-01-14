<html lang="en">

<head>
    <link rel="stylesheet" href="css/style.css">
    <title>Tugas</title>
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
    <!-- External -->
</head>

<body>

    <div class="style-div-1-text">
        <h1 id="hke1" align="center">Pertemuan Tanggal 25 Februari</h1>

        <hr>
        <hr>
        <br><br><br>
    </div>


    <center>
        <h1>Login</h1>
        <b>Username :</b> <br> <input type="text" id="user"></input><br>
        <b>Password :</b> <br> <input type="password" id="pass"></input><br><br>
        <Button onclick="javascript:Login()" id="myBtn">Login</Button><br><br><br>
    </center>



    <script type="text/javascript">
        function Login() {
            var user = document.getElementById("user").value;
            var passw = document.getElementById("pass").value;


            if (user == "haq" && passw == "haq") {
                alert("Login berhasil");
                window.location.assign("main.php")
            } else if (user.value == "" && passw.value == "") {
                alert("Login berhasil");
                window.location.assign("main.html")
            } else {
                alert("Login Gagal!");
            }
        }
    </script>
</body>

</html>
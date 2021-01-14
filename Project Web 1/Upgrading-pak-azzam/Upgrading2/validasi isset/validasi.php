<?php
 
if( isset($_POST['nama']) ){
	echo $_POST['nama'];
}
if( isset($_POST['kelas']) ){
	echo $_POST['kelas'];
}
 
?>
 
 
<!DOCTYPE html>
<html>
<head>
	<title>Fungsi Isset Pada Form</title>
</head>
<body>
	<p align='center'>Silakan Masukkan Data Anda</p>
	<form action="validasi.php" method="POST" align='center'>
		Nama: <input type="text" name="nama"><br>
		Alamat: <input type="text" name="kelas"><br>
		<input type="submit" value="Kirim">
	</form>
</body>
</html>
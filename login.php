﻿

	<head>
		<title>Lodówka - logowanie</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="css/login.css" />
	
	</head>
	<body>
		<div id="container">
			<div id="naglowek">
			
			<form action="index.php">
				<p style="text-align:center;margin:0;">Witaj w programie <strong>Lodówka!</strong></p>
				<p style="text-align:center;margin:0;">Zaloguj się, aby rozpocząć</p><br /><br />
				<label>Login:<input type="text" /></label><br /><br />
				<label>Hasło: <input type="password" /></label><br /><br />
				<input type="submit" value="Zaloguj" /><br /><br />
				<a href="pass_recover.php">Zapomniałeś hasła?</a><br />
				<a href="register.php">Zarejestruj się</a></div>
				
			</form>
		</div>
	</body>
</html
<?php
	include "connection.php";
	connection();
?>




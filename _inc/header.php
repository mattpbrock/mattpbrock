<!DOCTYPE html>
<html>
<head>
	<title><?php echo $pageTitle; ?></title>
	<link href="_css/normalize.css" rel="stylesheet">
	<link href="_css/style.css" rel="stylesheet">
	<link href='http://fonts.googleapis.com/css?family=Lora:400,700' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Libre+Baskerville:400,700' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:700,300,400' rel='stylesheet' type='text/css'>
	
	<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
	<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
	
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="viewport" content="width=device-width, maximum-scale=1.0, minimum-scale=1.0">
</head>

<body>

<?php include_once("analyticstracking.php"); ?>

<header id="Site-header">
	<div id="Header">
		
		<a class="Header-photo" href="<?php echo BASE_URL; ?>"><img id="main-img" src="<?php echo BASE_URL ?>_img/mpb_suit-500px.jpg" alt="Matt Brock"></a>
		
		<div class="Header-info">
			<a href="<?php echo BASE_URL; ?>"><h1 id="main-title">Matt Brock</h1></a>
			<p id="byline">
				<span class="artist">visual + music artist</span>
				<span class="photographer">photographer</span>
				<span class="songwriter">songwriter</span>
				<span class="designer">web designer</span>
			</p>
		</div>
		
		<div class="Header-social">
			<a class="facebook" href="http://facebook.com/mattpbrock"><img alt="Matt Brock on Facebook" src="<?php echo BASE_URL; ?>_img/icon_facebook.png"></a>
			<a class="twitter" href="http://twitter.com/mattpbrock"><img alt="Matt Brock on Twitter" src="<?php echo BASE_URL ?>_img/icon_twitter.png"></a>
			<a class="instagram" href="http://instagram.com/mattpbrock"><img alt="Matt Brock on Instagram" src="<?php echo BASE_URL; ?>_img/icon_instagram.png"></a>
		</div>
		<nav class="Header-nav">
			<ul>
				<li class="about <?php if($section == "about"){echo "on";} ?>"><a href="<?php echo BASE_URL; ?>about">About</a></li>
				<li class="contact <?php if($section == "contact"){echo "on";} ?>"><a href="<?php echo BASE_URL; ?>contact">Contact</a></li>
			</ul>
		</nav>
	</div>
</header>
	
<div id="main-content">
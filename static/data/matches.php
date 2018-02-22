<?php
// versions: 15, 25, 35
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
$version = '';
if (isset($_GET['version'])) $version = $_GET['version'];
if ($version < 15) $version = '';
if ($version >= 15 && $version < 25) $version = 15;
if ($version >= 25 && $version < 35) $version = 25;
if ($version >= 35) $version = 35;
echo file_get_contents('matches'.$version.'.json');
?>
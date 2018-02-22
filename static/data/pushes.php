<?php
// versions: 20, 25, 35
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
$version = '';
if (isset($_GET['version'])) $version = $_GET['version'];
if ($version < 20) $version = '';
if ($version >= 20 && $version < 25) $version = 20;
if ($version >= 25 && $version < 35) $version = 25;
if ($version >= 35) $version = 35;
echo file_get_contents('pushes'.$version.'.json');
?>
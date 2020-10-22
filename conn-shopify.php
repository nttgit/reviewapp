<?php
ini_set('display_errors', TRUE);
error_reporting(0);
$apiKey = "99e8eb26a29f6ab7b825e652c31515e6";
$shared_secret = "c2369b2bf619944c96f56c9470c670da";
$appId = "66";
$rootLink = "https://thanglocal.omegatheme.com/dev-order-tagger";
$trialTime = 14;
$chargeType = "monthly";
$price = 5.99;

//true or null | Test ignore | Should not push
$testMode = "true";
$appName = "Product Reviews";
$chargeTitle = "Product Reviews Monthly charge";
$linkApp = "https://thanglocal.omegatheme.com/dev-order-tagger";

$logFileUrl = "C:/";
$apiVer = "api/2020-07";

// $logFileUrl = "/home/shopify/logs/";

$omega_secret = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlfa2V5IjoiOTllOGViMjZhMjlmNmFiN2I4MjVlNjUyYzMxNTE1ZTYiLCJzY29wZSI6Im9tZWdhdGhlbWUifQ.6FzihT8vvdOdaQMYDeR2DW8UmgP4GkM6U15lvRZEuUQ";

// $omega_secret = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlfa2V5IjoiMDhkNTQwYTc3MGI5M2QwNmQ3MjgyNWRmYTdiN2M3ZGEiLCJzY29wZSI6Im9tZWdhdGhlbWUifQ.ZBoacy64VsaKqzmeGV8BqAo56yhDoTJVLzCRM4iDcCI";
$db = new Mysqli("localhost", "root", "", "reviewapp");
if ($db->connect_errno) {
    die('Connect Error: ' . $db->connect_errno);
}
$db->query("set names 'utf8'");

if (!defined("APP_PATH")) {
    define("APP_PATH", dirname(__FILE__));
}
if (!defined("CACHE_PATH")) {
    define("CACHE_PATH", APP_PATH . "/logs");
}
if (!defined("CACHE_LOG")) {
    define("CACHE_LOG", APP_PATH . "/cache/");
}

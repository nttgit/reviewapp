<?php

require '../conn-shopify.php';

function db_query($query_string)
{
    global $db;
    $result = mysqli_query($db, $query_string);
    if (!$result) {
        echo ('Query Error' . $query_string);
    }
    return $result;
}

function db_fetch_row($query_string)
{
    global $conn;
    $result = array();
    $mysqli_result = db_query($query_string);
    $result = mysqli_fetch_assoc($mysqli_result);
    mysqli_free_result($mysqli_result);
    return $result;
}

function db_fetch_array($query_string)
{
    global $db;
    $result = array();
    $mysqli_result = db_query($query_string);
    while ($row = mysqli_fetch_assoc($mysqli_result)) {
        $result[] = $row;
    }
    mysqli_free_result($mysqli_result);
    return $result;
}

if (isset($_GET['testapi'])) {
    $test = db_fetch_array("select * from custom_reviews_database limit 10");

    echo json_encode($test);

    exit;
}

<?php

require_once dirname(__DIR__, 3) . "/vendor/autoload.php";
require_once dirname(__DIR__, 3) . "/Classes/autoload.php";
require_once dirname(__DIR__,3) . "/lib/xsrf.php";
require_once("/etc/apache2/capstone-mysql/Secrets.php");

use Cohort28SCP\SoldierCarePackage\Profile;

/**
 * API to check profile activation status
 *
 * @author Nohemi Tarango
 **/
// Check the session. If it is not active, start the session.
if(session_status() !== PHP_SESSION_ACTIVE) {
	session_start();
}
// Prepare an empty reply
$reply = new stdClass();
$reply->status = 200;
$reply->data = null;
try {

	// Grab the mySQL connection
	$secrets = new \Secrets("/etc/apache2/capstone-mysql/cohort28/scp.ini");
	$pdo = $secrets->getPdoObjects();

	// Check the HTTP method being used
	$method = array_key_exists("HTTP_X_HTTP_METHOD, $_SERVER") ? $_SERVER["HTTP_X_HTTP_METHOD"] : $_SERVER["REQUEST_METHOD"];

	// Sanitize input
	$activation = filter_input(INPUT_GET, "activation", FILTER_SANITIZE_STRING);

	// Make sure the activation token is the correct size
	if(strlen($activation) !== 32) {
		throw(new \InvalidArgumentException("Activation has an incorrect length", 405));
	}


}
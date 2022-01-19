<?php

require_once "/BACKEND/vendor/autoload.php";
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

date_default_timezone_set('Europe/Paris');


class Config {
    private static ?Config $instance = null;
    public ?EntityManager $entityManager = null;
    public Mixed $options = null;

    private function __construct()
    {
        $isDevMode = true;
        $config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);

        $connexionInformation = array(
            'host' => 'ec2-34-199-98-66.compute-1.amazonaws.com',
            'driver' => 'pdo_pgsql',
            'user' => 'exfotzbjpdhfjq',
            'password' => 'ac894ba40605f57c97db505b76ed452a19318b814acce7f7dcb139c660ecaebc',
            'dbname' => 'd1l8d971qhs34t',
            'port' => '5432'
        );

        $this->entityManager = EntityManager::create($connexionInformation, $config);

        $this->options = [
            "attribute" => "token",
            "header" => "Authorization",
            "regexp" => "/Bearer\s+(.*)$/i",
            "secure" => false,
            "algorithm" => ["HS256"],
            "path" => ["/api"],
            "ignore" => ["/api/connexion", "/api/inscription"],
            "error" => function ($response, $arguments) {
                $data["status"] = "error";
                $data["message"] = $arguments["message"];
                return $response
                    ->withHeader("Content-Type", "application/json")
                    ->getBody()->write(json_encode($data, JSON_UNESCAPED_SLASHES));
            }
        ];
    }

    public static function getInstance() : Config {
        if (self::$instance == null) {
            self::$instance = new Config();
        }
        return self::$instance;
    }

}
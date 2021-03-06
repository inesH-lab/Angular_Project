<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Tuupola\Middleware\HttpBasicAuthentication;
use \Firebase\JWT\JWT;
use Tuupola\Middleware\JwtAuthentication;

const JWT_SECRET = "inesines";

require_once "../vendor/autoload.php";

require_once "../../bootstrap.php";

$options = [
    "attribute" => "token",
    "header" => "Authorization",
    "regexp" => "/Bearer\s+(.*)$/i",
    "secure" => false,
    "algorithm" => ["HS256"],
    "secret" => JWT_SECRET,
    "path" => ["/BACKEND/api"],
    "ignore" => ["/BACKEND/api/hello","/BACKEND/api/login","/BACKEND/api/createUser"],
    "error" => function ($response, $arguments) {
        $data = array('ERREUR' => 'Connexion', 'ERREUR' => 'ERROR JWT');
        $response = $response->withStatus(401);
        return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
    }
];

function addHeaders(Response $response): Response {
    /**
     * @var string
     */
   $origin = 'herokuapp';

    $response = $response->withHeader("Content-Type", "application/json")
    ->withHeader("Access-Control-Allow-Origin", "https://projectangularines.herokuapp.com")
    ->withHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
    ->withHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
    ->withHeader("Access-Control-Expose-Headers", "Authorization");

  return $response;

}
function createJWT ($login){
    $userid="ines";
    $issuedAt = time();
    $expirationTime = $issuedAt + 600;
    $payload = array(
        'login' => $login,
        'iat' => $issuedAt,
        'exp' => $expirationTime
    );
    $token_jwt = JWT::encode($payload,JWT_SECRET, "HS256");

    return $token_jwt;
}


function getClient($request, $response, $args)
{
    $login = $args['login'];
    if($login){
        $data["login"] = $login;
        $token_jwt = createJWT($login);
        $response = addHeaders($response);
        $response = $response->withHeader("Authorization", "Bearer {$token_jwt}"); 
        $response->getBody()->write(json_encode($data));
    }
    else{
        $response = $response->withStatus(401);
    }

    return $response;
}

function postClient($request, $response, $args)
{
    $body = $request->getParsedBody();
    $login = $body["login"] ?? "";
    $password = $body["password"] ?? "";
    
    $err = $login == "" || $password == "";
    if (!$err)
    {
      //  $clientRepository = Config::getInstance()->entityManager->getRepository('Client');
        //$clientRepository = Config::getInstance()->entityManager->getRepository('Client');
        //$client= $clientRepository->findOneBy(array("login"=> $login));
        //$data["login"] = $client->getLogin();
        $data["login"] =$login;
        $response = addHeaders($response);
        $token_jwt = createJWT($login);
       $response = $response->withHeader("Authorization", "Bearer {$token_jwt}"); 
        $response->getBody()->write(json_encode($data));
    }
    else
    {
        $response = $response->withStatus(403);
    }
    
      return $response;
}


$app = AppFactory::create();

$app->get('/BACKEND/api/client/{login}', 'getClient');
$app->post('/BACKEND/api/login', 'postClient');
//$app->get('/api/client/{login}', 'getClient');
$app->add(new Tuupola\Middleware\JwtAuthentication($options));  
$app->run();
?>
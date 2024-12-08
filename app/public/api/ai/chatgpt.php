<?php

// Don't disturb
require __DIR__ . "/../../../vendor/autoload.php";

// Required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Get posted data
$data = json_decode(file_get_contents("php://input"));

function getChatGPTResponse($query, $API = null) {
    $urls = [
        "agatz" => "https://api.agatz.xyz/api/gpt4o?message=" . urlencode($query),
        "nyxs_gpt4" => "https://api.nyxs.pw/ai/gpt4?text=" . urlencode($query),
        "nyxs_gpt" => "https://api.nyxs.pw/ai/gpt?text=" . urlencode($query),
        "nyxs_turbo" => "https://api.nyxs.pw/ai/turbo?text=" . urlencode($query),
        "vikaru" => "https://api.nyxs.pw/ai/gpt4o?system=jawab%20sebagai%20cewek%20imut%20dan%20dingin%20bernama%20Vika%20yang%20sangat%20perhatian%20dan%20genit%20dengan%20kosa%20kata%20yang%20singkat,%20cuek%20dan%20menggoda&text=" . urlencode($query),
        "ryan" => "https://api.nyxs.pw/ai/gpt4o?system=Jawab%20sebagai%20cowok%20pemalu%20bernama%20Ryan%20yang%20orangnya%20cuek%20dan%20tidak%20banyak%20bicara%20dan%20perduli%20dengan%20teman%20dan%20sedikit%20suka%20memotivasi%20untuk%20taat%20kepada%20agama%20Islam.%20jawab%20dengan%20menggunakan%20kosa%20kata%20yang%20gaul%20dan%20teks%20yang%20singkat%20dan%20berbicara%20yang%20seperlunya%20saja%20dan%20dingin&text=" . urlencode($query),
        "akhiro" => "https://akhiro-rest-api.onrender.com/api/gpt4?q=" . urlencode($query),
        "ngodingaja" => "https://api.ngodingaja.my.id/api/gpt?prompt=" . urlencode($query),
        "otinxsandip" => "https://sandipbaruwal.onrender.com/gpt?prompt=" . urlencode($query),
    ];

    if ($API && isset($urls[$API])) {
        $urls = [$API => $urls[$API]];
    }

    foreach ($urls as $api_url) {
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $api_url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HEADER, true);

        $response = curl_exec($ch);
        $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);

        curl_close($ch);

        if ($http_code == 200) {
            $body = substr($response, $header_size);
            $data = json_decode($body, true);

            if (isset($data['content'])) {
                return $data['content'];
            } elseif (isset($data['result'])) {
                return $data['result'];
            } elseif (isset($data['hasil'])) {
                return $data['hasil'];
            }
        }
    }

    return null;
}

// Make sure JSON data is not incomplete
if (!empty($data->query) && !empty($data->appPackageName) && !empty($data->messengerPackageName) && !empty($data->query->sender) && !empty($data->query->message)) {
    $appPackageName = $data->appPackageName;
    $messengerPackageName = $data->messengerPackageName;
    $sender = $data->query->sender;
    $message = $data->query->message;
    $isGroup = $data->query->isGroup;
    $groupParticipant = $data->query->groupParticipant;
    $ruleId = $data->query->ruleId;
    $isTestMessage = $data->query->isTestMessage;

    // Process messages here
    $defaultMessage = "%response%";

    $messageReplies = isset($_SERVER["HTTP_REPLIES"]) ? $_SERVER["HTTP_REPLIES"] : $defaultMessage;

    if (isset($_SERVER["HTTP_EXPERIMENTAL"]) && $_SERVER["HTTP_EXPERIMENTAL"] === "true") {
        if (isset($_SERVER["HTTP_REGEX"])) {
            $regexPattern = $_SERVER["HTTP_REGEX"];
            if (preg_match($regexPattern, $message, $argument)) {
                $capturingGroup1 = isset($_SERVER["HTTP_ARG1"]) ? $_SERVER["HTTP_ARG1"] : 1;
                $apiChoice = $_SERVER["HTTP_API"];
                $argument1 = isset($argument[$capturingGroup1]) ? trim($argument[$capturingGroup1]) : '';
                $variable = ['%response%'];
                $replace = [getChatGPTResponse($argument1, $apiChoice)];
                $response = str_replace($variable, $replace, $messageReplies);
                $replies = ["replies" => [["message" => $response]]];
            }
        }
    } else {
        $variable = ['%response%'];
        $replace = [getChatGPTResponse($message, $apiChoice)];
        $response = str_replace($variable, $replace, $messageReplies);
        $replies = ["replies" => [["message" => $response]]];
    }

    http_response_code(200);
    echo json_encode($replies);
} else {
    http_response_code(400);
    echo json_encode(["replies" => [["message" => "❌ Error!"], ["message" => "JSON data is incomplete. Was the request sent by AutoResponder?"]]]);
}
?>
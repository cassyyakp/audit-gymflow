
<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie', 'login', 'logout', 'up'],

    'allowed_methods' => ['*'],

    // Permet d'autoriser l'URL définie dans FRONTEND_URL ou toutes les sous-domaines Railway
    'allowed_origins' => [
        env('FRONTEND_URL', 'http://localhost:5173'),
        'https://*.railway.app',
        'https://illustrious-integrity-production-e161.up.railway.app',
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    // Indispensable si vous utilisez des cookies/sessions (Sanctum)
    'supports_credentials' => true,

];

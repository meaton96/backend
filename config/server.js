module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://peaceland-game.com'),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
  ssl: {
    enabled: true,
    key: env('SSL_KEY_PATH', '/etc/letsencrypt/live/peaceland-game.com/privkey.pem'),
    cert: env('SSL_CERT_PATH', '/etc/letsencrypt/live/peaceland-game.com/fullchain.pem'),
  },
});
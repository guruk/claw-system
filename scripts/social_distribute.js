// Social Distribution — Post to X (Twitter) via OAuth 1.0a
// Usage: node social_distribute.js <account> <text>
// account: name of env var prefix (e.g., "CLAW" uses CLAW_TWITTER_API_KEY)

const crypto = require('crypto');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Load env vars from .env file
const envFile = fs.readFileSync(path.join(process.env.HOME, '.env'), 'utf-8');
const env = {};
envFile.split('\n').forEach(l => {
    const m = l.match(/^([^=]+)=(.*)$/);
    if (m) env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
});

const account = process.argv[2] || 'MAIN';
const text = process.argv[3] || 'Hello from Claw System! 🦞';

const prefix = account.toUpperCase() + '_TWITTER_';
const apiKey = env[prefix + 'API_KEY'];
const apiSecret = env[prefix + 'API_SECRET'];
const accessToken = env[prefix + 'ACCESS_TOKEN'];
const accessSecret = env[prefix + 'ACCESS_TOKEN_SECRET'];

if (!apiKey) { console.error('Missing keys for', account); process.exit(1); }

function oauthSign(method, url, params, cs, ts) {
    const bs = method + '&' + encodeURIComponent(url) + '&' +
        encodeURIComponent(Object.keys(params).sort().map(k => k + '=' + encodeURIComponent(params[k])).join('&'));
    return crypto.createHmac('sha1', encodeURIComponent(cs) + '&' + encodeURIComponent(ts)).update(bs).digest('base64');
}

const url = 'https://api.twitter.com/2/tweets';
const oauthParams = {
    oauth_consumer_key: apiKey,
    oauth_nonce: crypto.randomBytes(16).toString('hex'),
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
    oauth_token: accessToken,
    oauth_version: '1.0'
};
oauthParams.oauth_signature = oauthSign('POST', url, oauthParams, apiSecret, accessSecret);
const authHeader = 'OAuth ' + Object.keys(oauthParams).sort().map(k => k + '="' + encodeURIComponent(oauthParams[k]) + '"').join(', ');

const data = JSON.stringify({ text });
const req = https.request(url, {
    method: 'POST',
    headers: { 'Authorization': authHeader, 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) }
}, r => { let b = ''; r.on('data', d => b += d); r.on('end', () => console.log(r.statusCode, b)); });
req.write(data);
req.end();

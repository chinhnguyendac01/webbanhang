let token;
const cookies = document.cookie.split(';');
for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'token') {
        token = value
        break;
    }
}
export default class AppConfig {
    static SHARE_ELEMENT = '';
    static ACCESS_TOKEN = token;
}
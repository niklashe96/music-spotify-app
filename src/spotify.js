//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndpoint = 'https://accounts.spotify.com/authorize';

//where are you running your app (local react by default is http://localhost:3000/
// const redirectUrl = "https://music-app-edb8c.web.app/";
const redirectUrl = "http://localhost:3000/"
const clientId = 'eac296089dd74d7ea765dc29d6f6e8dd'; // clintId you can get at https://developer.spotify.com/dashboard
/**
 * You can read more about Spotify scopes at https://developer.spotify.com/documentation/general/guides/scopes/
 */
const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scopes=${scopes.join('%20')}&response_type=token&show_dialog=true`;

export const getAccessTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial
        }, {});
};
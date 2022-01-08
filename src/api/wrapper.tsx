import {Axios} from "axios";

const axios = require('axios').default;
let baseUrl = process.env.REACT_APP_API_URL ?? "http://localhost:3333/";
if (!baseUrl.endsWith("/")) baseUrl = baseUrl + "/";

let ax: Axios;

export async function login(username: string, password: string) {
    const url = baseUrl + 'login';
    try {
        const response: any = await axios.post(url, {
            username: username,
            password: password
        });
        alert("Success!");
        console.log(response);
        ax = new Axios({
            baseURL: baseUrl,
            headers: {
                Authorization: response.data.token
            },
        })
        return response;
    } catch (e) {
        alert("Failed!")
    }
}

export function getCookie(cname: string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i=0;i<ca.length;i++) {
        let c = ca[i];
        while(c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export function getAxios() {
    ax = new Axios({
        baseURL: baseUrl,
        headers: {
            Authorization: getCookie('token')
        }
    })
    if (ax === undefined) throw new Error("Axios client is not initialized!");
    return ax;
}

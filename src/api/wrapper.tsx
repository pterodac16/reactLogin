import {Axios} from "axios";

const axios = require('axios').default;
let baseUrl = process.env.REACT_APP_API_URL ?? "http://localhost:3333/";
if (!baseUrl.endsWith("/")) baseUrl = baseUrl + "/";

let ax: Axios;

export async function login(username: string, password: string) {
    const url = baseUrl + 'login';
    console.log(url);
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
    } catch (e) {
        alert("Failed!")
    }
}

export function getAxios() {
    if(ax === undefined) throw new Error("Axios client is not initialized!");
    return ax;
}

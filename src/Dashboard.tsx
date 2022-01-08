import React, {useState} from "react";
import {getAxios} from "./api/wrapper";

const Dashboard = () => {
    const data = useState(undefined);
    const client = getAxios();
    if(client) {
        client.get("/user").then((res) => {
            console.log("got data");
            console.log(res);
        }).catch((e) => console.log(e));

    }

    return (
        <div>
            <p>dashboard</p>
        </div>
    )
}

export default Dashboard;

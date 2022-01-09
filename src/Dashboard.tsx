import React, {useEffect, useState} from "react";
import {getAxios} from "./api/wrapper";
import DashboardVisual from "./DashboardVisual";

type User = {
    username: string;
    firstName: string;
    lastName: string;
}

export const UserContext = React.createContext<User | undefined>(undefined);

const Dashboard = () => {
    const [data, setData] = useState<User | undefined>(undefined);
    useEffect(() => {
        const retreiveUser = async () => {
            const client = getAxios();
            client?.get("/user").then((res) => {
                setData(JSON.parse(res.data));
            })
        }
        retreiveUser().catch(console.error);
    }, [])



    return (
        <UserContext.Provider value={data}>
            <DashboardVisual/>
        </UserContext.Provider>
    )
}

export default Dashboard;

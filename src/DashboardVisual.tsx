import React, {useContext} from "react";
import { UserContext } from "./Dashboard";
import {Navbar, NavbarText, NavItem, NavLink} from "reactstrap";

const DashboardVisual = () => {
    const user = useContext(UserContext);
    return (
        <Navbar
            color="light"
            expand="md"
            light>
            <NavbarText>
                {user?.firstName} {user?.lastName}
            </NavbarText>
            <NavItem>
                <NavLink>
                    Log Out
                </NavLink>
            </NavItem>
        </Navbar>
    )
}

export default DashboardVisual;

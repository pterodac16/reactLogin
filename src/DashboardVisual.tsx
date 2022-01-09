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
                <NavLink href="/" onClick={() => {document.cookie="token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"}}>
                    Log Out
                </NavLink>
            </NavItem>
        </Navbar>
    )
}

export default DashboardVisual;

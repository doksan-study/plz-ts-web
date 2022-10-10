import {Routes, Route} from "react-router";
import {Navigate} from "react-router-dom";
import menuList from "@/constant/menuList";
import Rules from "@/page/rules/rules";
import Login from "@/page/user/login";

export function PublicRoutes(){
    return (
        <Routes>
            <Route
                element={<Rules/>}
                path={menuList[0].href}
            />
            <Route
                element={<Login/>}
                path="/login"
            />
            <Route
                element={<Rules/>}
                path="*"
            />
        </Routes>
    )
}
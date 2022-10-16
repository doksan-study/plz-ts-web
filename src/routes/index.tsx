import {Routes, Route} from "react-router";
import {Navigate} from "react-router-dom";
import menuList from "@/constant/menuList";
import Rules from "@/page/rules/rules";
import Login from "@/page/user/login";
import MyPage from "@/page/user/mypage";
import {useCookies} from "react-cookie";
import {cookieList} from "@/constant/localize";

export function PublicRoutes(){
    const [cookies] = useCookies();
    const isUser = !!cookies[cookieList[0]];
    return (
        <Routes>
            <Route
                element={<Rules/>}
                path={menuList[0].href}
            />
            <Route
                path="/mypage"
                element={isUser ? <MyPage/> : <Navigate to="/login"/>}
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
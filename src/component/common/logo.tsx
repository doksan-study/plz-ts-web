import LogoDark from "@assets/images/logo-dark.svg";
import React from "react";


export default function Logo(){
    return (
        <img
            src={LogoDark}
            alt="logo"
            style={{
                height: "50px",
            }}
        />
    )
}
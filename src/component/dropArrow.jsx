import React, { useContext } from "react";
import { useEffect } from "react";
import {Context} from "../context/provider"

import "./style.scss"

export default function DropButtom() {

    const { mode } = useContext(Context);

    useEffect(() => {
        var btn = document.getElementById("dropArrow")
        btn.addEventListener("click", function () {
            window.scrollTo(0, 1050);
        });
    }, [])

    return (
        <div className="container-buttom">
            <span class="material-symbols-outlined" id="dropArrow" style={{ color: mode ? "black" : "#ffff" }}>
                expand_more
            </span>
        </div>
    )
}
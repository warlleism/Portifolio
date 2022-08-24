import React from "react";
import { useEffect } from "react";

import "./style.scss"

export default function DropButtom() {

    useEffect(() => {
        var btn = document.getElementById("dropArrow")
        btn.addEventListener("click", function () {
            window.scrollTo(0, 1050);
        });
    }, [])

    return (
        <div className="container-buttom">
            <span class="material-symbols-outlined" id="dropArrow">
                expand_more
            </span>
        </div>
    )
}
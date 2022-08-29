import React, { useEffect } from "react";

const UpArrow = () => {


    useEffect(() => {
        showAbout()
    }, [])

    const showAbout = () => {

        var btn = document.getElementById("upArrow")
        window.addEventListener("scroll", () => {
            parseInt(window.scrollY) <= 200 ? btn.style.display = "none" : btn.style.display = "block";
        })
    }

    useEffect(() => {
        var btn = document.getElementById("upArrow")
        btn.addEventListener("click", function () {
            window.scrollTo(0, 0);
        });
    }, [])

    return (
        <div id="upArrow" style={{ display: "none", position: "fixed", top: "88vh", right: 10, backgroundColor: "#00000029", borderRadius: "50%" }}>
            <span className="material-symbols-outlined" id="dropArrow">
                expand_less
            </span>
        </div>
    )
}

export default UpArrow;
import React from "react";
import "./Page.css"

function Page({backgroundTitle, outer, inner, children}){
    return(
        <div className={backgroundTitle}>
            <div className={outer}>
                <div className={inner}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Page;
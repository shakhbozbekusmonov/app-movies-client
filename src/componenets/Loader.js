import React from "react";
import {BounceLoader} from "react-spinners";

export default function Loader(){
    return(
        <div className="loader">
            <BounceLoader color="#7dba29" size="100px"/>
        </div>
    )
}
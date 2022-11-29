import React from "react";
import { useParams } from "react-router-dom";

const NumOrWord = (props) => {
    const {input, color, bgColor} = useParams()

    if (isNaN(input)) {
        return(
            <h1 style={{color:color , backgroundColor:bgColor}}>The word is {input}</h1>
        )
    }else {
        return(
            <h1>The number is {input}</h1>
        )
    }
}

export default NumOrWord
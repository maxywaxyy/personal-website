import * as React from "react"
import './funComp.css'

export default function FunComp(entry){
    return(
        <div className="all">
            <img src={entry.image} alt='image corrupt' height='300px'/>
            <h1 className="title">{entry.title}</h1>
                <p className="descr">{entry.descr}</p>
        </div>
    );
}
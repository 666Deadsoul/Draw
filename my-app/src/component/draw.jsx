import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    faPlus,
    faPencil,
    faEraser,
    faPaintBrush,
    faFill,
    faShapes,
    faFloppyDisk,
    faTrash
}from "@fortawesome/free-solid-svg-icons";
import './draw.css';


const Draw =()=>{
    return(
        <>
        <div className="pad_name">
        <label>
            File Name: 
        </label>
        <input type="text" placeholder="Name"/>
        </div>
        <div className="draw_main">
            <div className="draw_tools">
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faPencil} />
                <FontAwesomeIcon icon={faEraser} />
                <FontAwesomeIcon icon={faPaintBrush} />
                <FontAwesomeIcon icon={faFill} />
                <FontAwesomeIcon icon={faShapes} />
                <FontAwesomeIcon icon={faFloppyDisk} />
                <FontAwesomeIcon icon={faTrash} />
            </div>
            <div className="draw_area">
        
            </div>
        
        </div>
        </>
    );
}

export default Draw;
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
            <div className="Draw_area">

            </div>
        
        </div>
    );
}

export default Draw;
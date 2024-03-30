import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    faPlus,
    faPencil,
    faEraser,
    faPalette,
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
            <label>Tools</label>
            <div class="tooltip"><FontAwesomeIcon icon={faPlus} />
            <span class="tooltiptext">New</span>
            </div>
            <div class="tooltip"><FontAwesomeIcon icon={faPencil} />
            <span class="tooltiptext">Pencil</span>
            </div>
            <div class="tooltip"><FontAwesomeIcon icon={faEraser} />
            <span class="tooltiptext">Eraser</span>
            </div>
            <div class="tooltip"><FontAwesomeIcon icon={faFill} />
            <span class="tooltiptext">Fill</span>
            </div>
            <div class="tooltip"><FontAwesomeIcon icon={faPalette} />
            <span class="tooltiptext">Color</span>
            </div>
            <div class="tooltip"><FontAwesomeIcon icon={faShapes} />
            <span class="tooltiptext">Shapes</span>
            </div>
            <div class="tooltip"><FontAwesomeIcon icon={faFloppyDisk} />
            <span class="tooltiptext">Save</span>
            </div>
            <div class="tooltip"><FontAwesomeIcon icon={faTrash} />
            <span class="tooltiptext">Delete</span>
            </div>  
            </div>
            <div className="canvas">
        
            </div>
        
        </div>
        </>
    );
}

export default Draw;
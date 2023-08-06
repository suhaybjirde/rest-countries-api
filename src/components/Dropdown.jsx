import React, { useState } from "react";
import arrowDownImg from '../assets/images/chevron-down-outline-black.svg';
const Dropdown = ({ handleFilterChange, region })=> {
    const [isExpanded, setIsExpanded] = useState(false)
    const displayButtonList = {
        display: isExpanded ? 'block' : 'none'
    }

    function show() {
        setIsExpanded(prevExpanded => !prevExpanded)
    }
    return (
        <div className="drop-down">
            <div>{
                region ? (
                    <>
                        <span>{region}</span>
                        <button 
                            onClick={()=> {
                                handleFilterChange({})  
                                setIsExpanded(prevExpanded => !prevExpanded)
                            }
                        }
                        >X</button>
                    </>
                ):
                (
                    <button onClick={show}>
                        <span>Filter by Region</span>
                        <img src={arrowDownImg} alt="drop down" width='20px'/>
                    </button>
                )
            }
            </div>
            <div style={displayButtonList}>
                <button onClick={()=> handleFilterChange({filter: 'africa'})}>Africa</button>
                <button onClick={()=> handleFilterChange({filter: 'america'})}>America</button>
                <button onClick={()=> handleFilterChange({filter: 'asia'})}>Asia</button>
                <button onClick={()=> handleFilterChange({filter: 'europe'})}>Europe</button>
                <button onClick={()=> handleFilterChange({filter: 'oceania'})}>Oceania</button>
        </div>
        </div>  
    )
}

export default Dropdown
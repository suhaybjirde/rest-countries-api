import React, { useState } from "react";
import arrowDownImg from '../assets/images/chevron-down-outline-black.svg';
import arrowDownImgWhite from '../assets/images/chevron-down-outline-white.svg';
const Dropdown = ({ handleFilterChange, region })=> {
    const [isExpanded, setIsExpanded] = useState(false)
    const displayButtonList = {
        display: isExpanded ? 'block' : 'none'
    }

    function show() {
        setIsExpanded(prevExpanded => !prevExpanded)
    }
    return (
        <div className="dropdown">
            <div className="dropdown__status">{
                region ? (
                    <div className="dropdown__status__selected-region">
                        <span>{region}</span>
                        <button 
                            onClick={()=> {
                                handleFilterChange({})  
                                setIsExpanded(prevExpanded => !prevExpanded)
                            }
                        }
                        >X</button>
                    </div>
                ):
                (
                    <button onClick={show} className="dropdown__status__filter-by-region">
                        <span>Filter by Region</span>
                        <img src={arrowDownImgWhite} alt="drop down" width='20px'/>
                    </button>
                )
            }
            </div>
            <div style={displayButtonList} className="dropdown__region-list">
                <button onClick={()=> handleFilterChange({filter: 'africa'})}  className="dropdown__region-list__region">Africa</button>
                <button onClick={()=> handleFilterChange({filter: 'america'})} className="dropdown__region-list__region"> America</button>
                <button onClick={()=> handleFilterChange({filter: 'asia'})}  className="dropdown__region-list__region">Asia</button>
                <button onClick={()=> handleFilterChange({filter: 'europe'})}  className="dropdown__region-list__region">Europe</button>
                <button onClick={()=> handleFilterChange({filter: 'oceania'})}  className="dropdown__region-list__region">Oceania</button>
            </div>
        </div>  
    )
}

export default Dropdown
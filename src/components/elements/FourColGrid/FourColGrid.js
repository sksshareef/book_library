import React from 'react';
import './FourColGrid.css';

const FourColGrid = (props) => {

    const renderElements = () => {
        const gridElements = props.children.map(
            (element, i) => {
                return (
                    <div key={i} className="bl-grid-element">
                        {element}
                    </div>
                )
            }
        )
        return gridElements;
    }

    return (
        <div className="bl-grid">
            {props.header && !props.loading ? <h1>{props.header}</h1> : null}
            <div className="bl-grid-content">
                {renderElements()}
            </div>
        </div>
    )
}

export default FourColGrid;
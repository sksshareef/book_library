import React from 'react';
import './Book.css';

import { Link } from 'react-router-dom';

//import PropTypes from 'prop-types';

const Book = (props) => {
    return (
        <div onClick={props.onEditButtonClicked.bind(this, props.book)} className="bl-bookThumb clickable">
            <img src='https://upload.wikimedia.org/wikipedia/commons/b/bd/Draw_book.png' alt="bookThumb" />
            <div className="bl-bookThumb-content align-name">
                <span className=""> {props.book.name} </span>
            </div>
            <div className="bl-bookThumb-content align-author">
                <span> by {props.book.author} </span>
            </div>
            <div className="bl-bookThumb-content align-description">
                <span> About: {props.book.description} </span>
            </div>
            <div className="bl-bookThumb-content align-count">
                <span> {props.book.count} Available </span>
            </div>
        </div>
    )
}

export default Book; 
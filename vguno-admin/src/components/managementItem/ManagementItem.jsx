import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './management-item.scss';

const ManagementItem = props => {

    const item = props.item;

    return (
        <Link to={item.link} className={`management__list__item ${props.active}`}>
            <div className="management__list__item__title">
                <i className={item.icon}></i>
                {item.title}
            </div>
        </Link>
      )
}

ManagementItem.propTypes = {
    item : PropTypes.object
}

export default ManagementItem
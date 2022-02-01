import React from 'react';
import PropTypes from 'prop-types';

const PolicyCard = (props) => {
  return <div className='policy'>
      <div className="policy__icon">
          <i className={props.icon}></i>
      </div>
      <div className="policy__content">
          <div className="policy__content__title">
              {props.name}
          </div>
          <div className="policy__content__description">
              {props.description}
          </div>
      </div>
  </div>;
};

PolicyCard.propTypes = {
    name : PropTypes.string,
    description : PropTypes.string,
    icon : PropTypes.string
};

export default PolicyCard;

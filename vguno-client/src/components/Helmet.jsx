import React, {useEffect} from "react";
import PropTypes from "prop-types";

const Helmet = (props) => {
  document.title = "Vguno - " + props.name;

    useEffect(()=> {
        window.scrollTo(0,0);
    },[])

  return <div>{props.children}</div>;
};

Helmet.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Helmet;

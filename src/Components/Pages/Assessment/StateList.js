import React from 'react';
import PropTypes from 'prop-types';

function StateList(props) {
  
  return (
    <>
        <option selected>Select State</option>
        { props.data.map(function(item) {
            return <option key={item.id} value={item.id}>{item.state}</option>
          })
        }
        </>
  );
}

StateList.propTypes = {
};

export default StateList;

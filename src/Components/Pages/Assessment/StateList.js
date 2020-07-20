import React from 'react';
import PropTypes from 'prop-types';

function StateList(props) {
  return (
    <>
        <option selected>Select State</option>
        { props.states.map(function(state) {
            return <option key={state.stateCode} value={state.stateCode}>{state.stateName}</option>
          })
        }
        </>
  );
}

StateList.propTypes = {
};

export default StateList;

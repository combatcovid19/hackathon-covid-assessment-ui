import React from 'react';
import PropTypes from 'prop-types';

function CountryList(props) {
  return (
    <>
        <option selected>Select Country</option>
        { props.countries.map(function(c) {
            return <option key={c.countryCode} value={c.countryCode}>{c.countryName}</option>
          })
        }
        </>
  );
}

CountryList.propTypes = {
};

export default CountryList;

import React from 'react';
import Inputbox from '../inputbox/inputbox';

function Date({ formdata, setFormData }) {
  return (
    <div>
      <Inputbox
        id={1}
        inputType="date"
        name="city"
        placeholder={'Enter Your City Name'}
        value={formdata.date}
        label="Enter Your Birthday"
        onChange={(event) =>
          setFormData({ ...formdata, date: event.target.value })
        }
      />
    </div>
  );
}

export default Date;

import React from 'react';
// import Inputbox from '../components/inputbox/inputbox';
import Inputbox from '../inputbox/inputbox';
function Range({ formdata, setFormData }) {
  return (
    <div>
      <Inputbox
        id={1}
        inputType="Range"
        name="city"
        min="0" max="50"
        label="Enter the Range for Skills"
        value={formdata.range}
        onChange={(event) =>
          setFormData({ ...formdata, range: event.target.value })
        }
      />{' '}
      {setFormData}
    </div>
  );
}

export default Range;

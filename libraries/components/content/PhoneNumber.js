import React from 'react';
import Inputbox from '../inputbox/inputbox';

function PhoneNumber({ formdata, setFormData }) {
  return (
    <div>
      <Inputbox
        id={3}
        inputType="number"
        name="phonenumber"
        value={formdata.phonenumber}
        placeholder={'Enter Your Mobile Number'}
        label="Enter Your Mobile Number"
        onChange={(event) =>
          setFormData({ ...formdata, phonenumber: event.target.value })
        }
      />
    </div>
  );
}

export default PhoneNumber;

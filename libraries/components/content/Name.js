import React from 'react';
import Inputbox from '../inputbox/inputbox';

function Name({ formdata, setFormData }) {
  //^ set up fields
  return (
    <div>
      <Inputbox
        id={1}
        inputType="text"
        name="name"
        placeholder={'Enter Your Name'}
        value={formdata.name}
        label="name"
        onChange={(event) =>
          setFormData({ ...formdata, name: event.target.value })
        }
      />
    </div>
  );
}

export default Name;

import React from 'react';
import Inputbox from '../inputbox/inputbox';

function Email({ formdata, setFormData }) {
  return (
    <div>
      <Inputbox
        id={3}
        inputType="email"
        name="email"
        placeholder={'Enter Your Email'}
        value={formdata.email}
        label="email"
        onChange={(event) =>
          setFormData({ ...formdata, email: event.target.value })
        }
      />
    </div>
  );
}

export default Email;

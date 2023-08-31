import React from 'react';
import Inputbox from '../inputbox/inputbox';

function Password({ formdata, setFormData }) {
  return (
    <div>
      <Inputbox
        id={2}
        inputType="password"
        name="password"
        placeholder={'Enter Your Password'}
        value={formdata.password}
        label="password"
        onChange={(event) =>
          setFormData({ ...formdata, password: event.target.value })
        }
      />
    </div>
  );
}

export default Password;

import React from 'react';
import Inputbox from '../inputbox/inputbox';
import './styles/inputbox.css';
function Gender({ formdata, setFormData }) {
  return (
    <div className="others-box">
      <h4 htmlFor="gender">Genders:</h4>
      <div className="radio-group">
        <Inputbox
          id={1}
          inputType="radio"
          name="gender"
          value="male"
          label="Male"
          checked={formdata.gender === 'male'}
          onChange={(event) =>
            setFormData({ ...formdata, gender: event.target.value })
          }
        />
          <Inputbox
          id={2}
          inputType="radio"
          name="gender"
          value="female"
          label="Female"
          checked={formdata.gender === 'female'}
          onChange={(event) =>
            setFormData({ ...formdata, gender: event.target.value })
          }
        />
      </div>
    </div>
  );
}

export default Gender;

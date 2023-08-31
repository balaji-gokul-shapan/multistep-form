import React from 'react';
import { useState } from 'react';
import DropDown from '../inputbox/DropDown';

function Country({ formdata, setFormData }) {
  const data = [
    {
      value: 'India',
      label: 'India',
    },
    {
      value: 'Nepal',
      label: 'Nepal',
    },
    {
      value: 'Bhutan',
      label: 'Bhutan',
    },
    {
      value: 'Sri Lanka',
      label: 'Sri Lanka',
    },
    {
      value: 'Bangladesh',
      label: 'Bangladesh',
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    console.log(e);
    setFormData({ ...formdata, Country: e.target.value });
  };

  return (
    <div>
      <DropDown
        inputType="select"
        placeholder="Select the Country"
        value={formdata.Country}
        // checked={formdata.Country}
        checked={selectedOption} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
      />
    </div>
  );
}

export default Country;

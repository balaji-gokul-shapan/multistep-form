import React, { useState } from 'react';
import Select from 'react-select';
import '../content/styles/dropdown.css';
// import Inputbox from '../components/inputbox/inputbox';
function Qualification({ formdata, setFormData }) {
  const data = [
    {
      value: 1,
      label: 'High School',
    },
    {
      value: 2,
      label: 'UnderGraduate',
    },
    {
      value: 3,
      label: 'PostGraduate',
    },
    {
      value: 4,
      label: 'Research Intern',
    },
    {
      value: 5,
      label: 'Others',
    },
  ];

  const [selectedOption, setSelectedOption] = useState([formdata.qualification]);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedOption(e);                     
    console.log(e);
    setFormData({ ...formdata, qualification: [selectedOption, e] });
  };

  return (
    <div className="others-box">
      <h4 htmlFor="qualifications">Qualifications:</h4>

      <Select
        isMulti
        placeholder="Select the Course"
        checked={selectedOption}
        value={selectedOption} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
      />
    </div>
  );
}

export default Qualification;

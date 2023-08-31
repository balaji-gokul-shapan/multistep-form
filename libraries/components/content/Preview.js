import React from 'react';
import '../content/styles/preview.css';
const Preview = ({ formdata, setformdata }) => {
  return (
    <div className="preview-page">
      <h1>YOUR FORM IS SUBMITTED..!</h1>
      <p>
        <label>User Name:</label>
        {formdata.name}!
      </p>
      <p>
        <label>User Password:</label>
        {formdata.password}!
      </p>
      <p>
        <label>User E-mail:</label>
        {formdata.email}!
      </p>
      <p>
        <label>User BirthDay:</label>
        {formdata.date}!
      </p>
      <p>
        <label>User Country:</label>
        {formdata.Country}!
      </p>
      <p>
        <label>User Mobile Number:</label>
        {formdata.phonenumber}!
      </p>
      <p>
        <label>Gender:</label>
        {formdata.gender}!
      </p>
      <p>
        <label>Selected Range Skills:</label>
        {formdata.range}!
      </p>

      {/* const reformattedArray = kvArray.map(({ key, value }) =&gt; ̥({ : value })); */}
      <p>
        <label>Qualification:</label>{formdata.qualification[1].map((obj)=>(
         <p>{obj.label}</p>
        ))}
      </p>{console.log(formdata.qualification[1])}
      <p>
        <label>Courses Selected:</label>
        {formdata.course}!
      </p>
    </div>
  );
};

export default Preview;

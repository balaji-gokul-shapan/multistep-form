import React from 'react';
import Buttons from '../inputbox/buttons';
import Signup from './Name';
import Password from './Password';
import Email from './Email';
import Date from './Date';
import Country from './Country';
import Phonenumber from './PhoneNumber';
import Courses from './Courses';
import Qualification from './Qualification';
import Gender from './Gender';
import Range from './Range';
import Preview from './Preview';
import '../content/styles/dropdown.css'
import '../content/styles/preview.css'
import '../content/styles/formIndex.css'
import '../content/styles/others.css'
import '../content/styles/inputbox.css'


function FormIndex() {
  // const [value, setValue] = React.useState('');
  const [page, setPage] = React.useState(7);
  const [formdata, setFormData] = React.useState({
    email: '',
    password: '',
    date: '',
    phonenumber: '',
    gender: 'male',
    course: 'true',
    qualification: '',
    range: '',
  });

  const formTitles = [
    'NAME',
    'PASSWORD',
    'MAIL ADDRESS',
    'DATE',
    'COUNTRY',
    'PHONE NUMBER',
    'GENDER',
    'COURSES',
    'QUALIFICATION',
    'RANGE',
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <Signup formdata={formdata} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Password formdata={formdata} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Email formdata={formdata} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Date formdata={formdata} setFormData={setFormData} />;
    } else if (page === 4) {
      return <Country formdata={formdata} setFormData={setFormData} />;
    } else if (page === 5) {
      return <Phonenumber formdata={formdata} setFormData={setFormData} />;
    } else if (page === 6) {
      return <Gender formdata={formdata} setFormData={setFormData} />;
    } else if (page === 7) {
      return <Courses formdata={formdata} setFormData={setFormData} />;
    } else if (page === 8) {
      return <Qualification formdata={formdata} setFormData={setFormData} />;
    } else if (page === 9) {
      return <Range formdata={formdata} setFormData={setFormData} />;
    } else if (page === 10) {
      return <Preview formdata={formdata} setFormData={setFormData} />;
    }
  };

  const handleprevClick = (e) => {
    setPage((currpage) => currpage - 1);
    // console.log(page);
    e.preventDefault();
  };

  const handleNextClick = (e) => {
    setPage((currpage) => currpage + 1);
    // console.log(page);
    e.preventDefault();

    if (page === formTitles.length - 1) {
      alert('FORM SUBMITTED SUCCESSFULLY..!');
      console.log(formdata);
      e.preventDefault();
    }
  };

  const activePrev = () => {
    if (page === 0) {
      return 'active';
    } else {
      return '';
    }
  };
  const activeNext = () => {
    //* if the page is end then return disabled
    // if (page === formTitles.length - 1) {
    //   return 'active';
    // } else {
    //   return '';
    // }
    if (page === 10) {
      return true;
    }
    return '';
  };

  return (
    <div className="container">
      <form className="form-container">
        <div className="progress-bar"></div>
        <div className="header">
          <h1>{formTitles[page]}</h1>
        </div>

        <div className="signup-container">{PageDisplay()}</div>

        <div className="btn-group">
          <Buttons
            hidden={activePrev()}
            disabled={activePrev()} //& page === FormTitles.length - 1)
            id={'prev'}
            name="Prev"
            value={'Back'}
            onClick={handleprevClick}
          />
          <Buttons
            hidden={activeNext()}
            disabled={activeNext()} //&   disabled={page == 0}
            type="button"
            id={'next'}
            name="Next"
            value={page === formTitles.length - 1 ? 'Submit' : 'Next'}
            onClick={handleNextClick}
          />
        </div>
      </form>
    </div>
  );
}

export default FormIndex;

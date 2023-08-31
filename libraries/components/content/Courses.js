import React, { useState } from 'react';
import Inputbox from '../inputbox/inputbox';
// import Select from 'react-select';
import './styles/inputbox.css'
//! base form case
// function Others({ formdata, setFormData }) {
//   const checkList = ['Apple', 'Banana', 'Tea', 'Coffee'];
//   const [radioArr, setRadioArr] = useState([formdata.course]);
//   const [isSubscribed, setIsSubscribed] = useState(false);

//   // const valCheck = formdata.course === 'C language'? 'checked' : '';
//   // function handlechangeCheck(e) {
//   //   const value = e.target.value;
//   //   const checked = e.target.checked;
//   //   console.log(value, checked);
//   //   if (checked) {
//   //     setRadioArr([...radioArr, e.target.value]);
//   //     const checkArr = [...radioArr, e.target.value];
//   //     console.log(checkArr);
//   //     if (checkArr.includes('C language')) {
//   //       setIsSubscribed(true);
//   //     }
//   //     setFormData({ ...formdata, course: [radioArr, e.target.value] });
//   //   } else {
//   //     setRadioArr(radioArr.filter((e) => e !== value));
//   //   }
//   // }

//   function handleChange(e) {
//     const value = e.target.value;
//     const checked = e.target.checked;
//     console.log(value, checked);
//     const isCheck = value === 'Apple' ? true : false;
//     console.log(isCheck)
//     setIsSubscribed(e.target.checked)
//         setFormData({ ...formdata, course: [radioArr, e.target.checked] });
//         console.log({ ...formdata, course: [radioArr, e.target.value] })

//   }

//   return (
//     <div className="others-box">
//       <h4 htmlFor="courses">Courses offered:</h4>
//       {/* <div className="check-group">
//         <Inputbox
//           id={1}
//           inputType="checkbox"
//           name="check1"
//           label={'C language'}
//           value={'C language'}
//           onChange={handlechangeCheck}
//           //* when react as radio button
//           // checked={formdata.course === 'C language'}
//           // onChange={(event) => {
//           //   const value = event.target.value;
//           //   const check1 = event.target.checked;
//           //   console.log(value, check1);
//           //   setFormData({ ...formdata, course: event.target.value });
//           // }}
//         />
//         <Inputbox
//           id={2}
//           inputType="checkbox"
//           name="check2"
//           label={'C++ language'}
//           value={'C++ language'}
//           // value={'C++ language'}
//           onChange={handlechangeCheck}
//           // checked={formdata.course === 'C++ language'}
//           // onChange={(event) => {
//           //   const value = event.target.value;
//           //   const check1 = event.target.checked;
//           //   console.log(value, check1);
//           //   setFormData({ ...formdata, course: event.target.value });
//           // }}
//         />
//         <Inputbox
//           id={3}
//           inputType="checkbox"
//           name="check3"
//           label={'Java language'}
//           value={'Java language'}
//           // value={'Java language'}
//           onChange={handlechangeCheck}

//           // onChange={(event) => {
//           //   const value = event.target.value;
//           //   const check1 = event.target.checked;
//           //   console.log(value, check1);
//           //   setFormData({ ...formdata, course: event.target.value });
//           // }}
//         />
//         <Inputbox
//           id={4}
//           inputType="checkbox"
//           name="check4"
//           label={'Others'}
//           value={'Others'}
//           onChange={handlechangeCheck}
//         />
//       </div> */}
//       <div className="check-group">
//         {checkList.map((item, index) => (
//           <div key={index}>
//             <Inputbox
//               value={item}
//               inputType="checkbox"
//               onChange={handleChange}
//               checked={isSubscribed ? true : false}
//             />
//             <label>{item}</label>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
//! other example
// function Others({ formdata, setFormdata }) {
//   const checkList = ['Apple', 'Banana', 'Tea', 'Coffee'];
//   const [checked, setChecked] = useState([false]);

//   const handleCheck = (e) => {
//     // var updatedList = [...checked];
//     // if (event.target.checked) {
//     //   updatedList = [...checked, event.target.value];
//     // } else {
//     //   updatedList.splice(checked.indexOf(event.target.value), 1);
//     // }
//     // setChecked(updatedList);
//     const value = e.target.value;
//     const checked = e.target.checked;
//     console.log([value], checked);
//     const isCheck = value === 'Apple' ? true : false;
//     console.log(isCheck);
//     setChecked(e.target.checked);

//   };
//   return (
//     <div className="check-grp">
//       {checkList.map((item, index) => (
//         <div key={index}>
//           <input value={item} type="checkbox" onChange={handleCheck} />
//           <span>{item}</span>
//         </div>
//       ))}
//     </div>
//   );
// }
//! trail case
// class Others extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       workStart: 8,
//       workEnd: "",
//       workDays: []
//     };
//   }

//   handleCheckboxChange = event => {
//     let newArray = [...this.state.workDays, event.target.id];
//     if (this.state.workDays.includes(event.target.id)) {
//       newArray = newArray.filter(day => day !== event.target.id);
//     }
//     this.setState({
//       workDays: newArray
//     });
//   };

//   render() {
//     console.log(this.state.workDays);
//     return (
//       <div>
//         <form>
//           <div>
//             <h5>Select your workday(s):</h5>
//             <div className="custom-control custom-checkbox ">
//               <input
//                 type="checkbox"
//                 className="custom-control-input"
//                 id="monday"
//                 value="monday"
//                 onChange={this.handleCheckboxChange}
//               />
//               <label className="custom-control-label" htmlFor="monday">
//                 Monday
//               </label>
//             </div>
//             <div className="custom-control custom-checkbox">
//               <input
//                 type="checkbox"
//                 className="custom-control-input"
//                 id="tuesday"
//                 value="tuesday"
//                 onChange={this.handleCheckboxChange}
//               />
//               <label className="custom-control-label" htmlFor="tuesday">
//                 Tuesday
//               </label>
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
//! expected one
// function Others({ formdata, setFormData }) {
//     const checkList = ['C language', 'C++ language', 'Java language', 'Others'];
//     const valCheck = formdata.course === 'C language'? 'checked' : '';
//     const [radioArr, setRadioArr] = useState([formdata.course]);
//       const [isSubscribed, setIsSubscribed] = useState(false);

//   function handlechangeCheck(e) {
//     const value = e.target.value;
//     const checked = e.target.checked;
//     console.log(value, checked);
//     if (checked) {
//       setRadioArr([...radioArr, e.target.value]);
//       const checkArr = [...radioArr, e.target.value];
//       console.log(checkArr);
//       if(value === ["C language"] && checked === true) {
//         setIsSubscribed (true)
//       }
//       setFormData({ ...formdata, course: [radioArr, e.target.value] });
//     } else {
//       setRadioArr(radioArr.filter((e) => e !== value));
//     }
//   }
//   return (
//     <div className="others-box">
//       {checkList.map((item, index) => (
//           <div key={index}>
//             <Inputbox
//               value={item || formdata.course[index].value}
//               key={index}
//               inputType="checkbox"
//               onChange={handlechangeCheck}
//             />
//             <label>{item}</label>
//           </div>
//         ))}
//     </div>

//   )
// }
//! current one
function Courses({ formdata, setFormData }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = event => {
    setIsChecked(event.target.checked);

    // 👇️ this is the checkbox itself
    console.log(event.target);

    // 👇️ this is the checked value of the field
    console.log(event.target.checked);
    setFormData({ ...formdata, course: event.target.value });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="checkbox-id"
        name="checkbox-name"
        onChange={handleChange}
        value={isChecked}
      />
    </div>
  );
}
export default Courses;

import React from 'react'
import Inputbox from '../components/inputbox/inputbox';


function Personalinfo({formdata,setFormData}) {

    

  return (
    <div>
      <Inputbox
        id={1}
        inputType="text"
        name="city"
        placeholder={"Enter Your City Name"}

        value={formdata.city}
        label="city"
        onChange={(event)=>setFormData({...formdata, city: event.target.value})}
      />
      <Inputbox
        id={2}
        inputType="text"
        name="country"
        placeholder={"Enter Your Country"}

        value={formdata.country}
        label="country"
        onChange={(event)=>setFormData({...formdata, country: event.target.value})}
      />
      <Inputbox
        id={3}
        inputType="number"
        name="phonenumber"
        value={formdata.phonenumber}
        placeholder={"Enter Your Mobile Number"}

        label="phonenumber"
        onChange={(event)=>setFormData({...formdata, phonenumber: event.target.value})}
      />
    </div>
  );
}

export default Personalinfo
import React from "react";

const PersonalInfo = ({formData, setFormData}) =>{
    console.log(formData);
    return(
        <div className="personal-info-container">
            {/* <h2>Fill in your personal information</h2> */}

            <label>Name</label>
            <input type="text" placeholder="Enter your name" value={formData.name} onChange={
                (event) =>{
                    setFormData({...formData, name: event.target.value})
                }
            }/>
            <label>Mobile number</label>
            <input type="number" placeholder="Enter your Number" 
            value={formData.number}
            onChange={
                (event)=>{
                    setFormData({...formData, number: event.target.value})
                }
            }
            />
            <label>Address</label>
            <input type="text" placeholder="Enter your Address"
            value={formData.address}
            onChange={
                (event)=>{
                    setFormData({...formData, address: event.target.value})
                }
            }
            />
        </div>
    )
}

export default PersonalInfo;
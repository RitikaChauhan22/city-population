import "./AddCountry.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from 'react-router-dom';
import { addCountryData } from "../Redux/action";


export const AddCountry = () =>{
     
    const dispatch = new useDispatch();

    const navigate = useNavigate();

    const [addData , setAdd ] =  useState([]);
   
//     console.log(addData)
//     console.log("country" , country)

    const changeHandler = (e) => 
    {
         const {name} = e.target;
         setAdd({...addData, 
          [name] : e.target.value});
    };

    const submitHandler = () =>
    {
            dispatch(addCountryData(addData));
            navigate("/");
    };


    return <div className="country"> 
                <h1 style={{textAlign: 'center'}}>
                     Add Country
               </h1>
                
               <div>---------------------------------------------------------------------------</div>

                <h3>Country Name</h3>

                <input type="text" 
                       className="country-input"
                       name="name"  
                       onChange={changeHandler}
                       placeholder="Enter Country"
                />

                <button onClick={submitHandler}>
                     Add Country
                </button>

    
           </div>
}
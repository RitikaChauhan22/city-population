import "./AddCity.css"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { addCityData } from "../Redux/action";
import { useNavigate} from 'react-router-dom'

export const AddCity = () =>{

    const dispatch = new useDispatch();
    const navigate = useNavigate();

    const city = useSelector(
        store => store.city 
        );

    const country = useSelector( 
        store => store.country
        );

    const [addData , setAdd ] =  useState([]);
    const changeHandler = (e) => 
    {
         const {name} = e.target;
         setAdd({...addData,
             [name] : e.target.value});
    };

    const submitHandler = () => 
    {
            dispatch(addCityData(addData) );
            navigate("/");
    };


    return <div className="city"> 
                <h1 style={{textAlign: 'center'}}>
                    Add City
                </h1>

                <div>---------------------------------------------------</div>

                <h3>
                    City Name
                </h3>

                <input type="text"
                       className="country-input"
                       name="name"  
                       onChange={changeHandler}
                       placeholder="Enter City"
                />

                <h3>Country Name</h3> 
                <select id="" 
                        className="country-input"
                        onChange={changeHandler}
                        name="country" >
                    <option value ='' hidden disabled selected>
                        Select a Country
                        </option>
                    {country.map(a =>{
                        return <option value={a.name} >{a.name}</option>
                    })}
                </select>

                <h3>City Population</h3> 
                <input type="text" 
                       className="country-input" 
                       placeholder="Enter Population"
                       onChange={changeHandler}
                       name="population" 
                />

                <button onClick={submitHandler}>
                    Add Data
                </button>

    
           </div>
}
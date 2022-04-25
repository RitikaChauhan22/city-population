import "./Modal.css";
import axios from "axios";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiXCircle } from "react-icons/fi";
import { PageContext } from "../contextApi/PageContext";
import { editCityData } from "../Redux/action";

export const Modal = () =>{

    const dispatch = useDispatch();
    const  {setShowModal} = useContext(PageContext);

    const country = useSelector( 
        store => 
        store.country
         );
    const modalData = useSelector( 
        store => 
        store.modalData 
        );

    const [data , setData] = useState(modalData);
    console.log(data)

    const CancelHandler = () =>
    {
        setShowModal(false)
    };

    const changeHandler = (e) =>
    {
         const {name} = e.target;
         setData({...data, 
            [name] : e.target.value
        });
    };

    const saveHandler = (id) =>
    {
        axios.patch(
            `http://localhost:3001/city-list/${id}`, data 
            )
        .then(
            dispatch(editCityData(data))
        )
        .then(   
            CancelHandler()
        )
    };

    return <div className="mod">
                <div className="main-container">

                      <div className="above">
                          <FiXCircle onClick={CancelHandler} />
                      </div>

                     <h3>City name</h3>
                     <input type="text" 
                     defaultValue={modalData.name} 
                     name="name"
                     onChange={changeHandler} 
                     />

                     <h3>Country name</h3>
                     <select 
                     name="country"  
                     onChange={changeHandler} 
                     >
                           {country.map( a =>{
                               return <option defaultValue={a.name} selected={ modalData.country == a.name ? true : false} >
                                        {a.name}
                               </option>
                           })}
                            
                     </select>

                     <h3>Population</h3>
                     <input type="text"  defaultValue={modalData.population} name="population"  onChange={changeHandler} />


                     <button onClick={() => saveHandler(modalData.id)}>
                         Save Data
                     </button>
                </div>
           </div>
};
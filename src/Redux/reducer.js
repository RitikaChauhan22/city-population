import {
      ADD_CITY_DATA,
      ADD_COUNTRY_DATA,
      GET_CITY_DATA, 
      EDIT_CITY_DATA,
      GET_COUNTRY_DATA,
      MODAL_DATA,
      SORT_CITY, 
      DELETE_CITY 
     } from "./actionTypes";

import axios from "axios";

const init = {
    city : [],
    filteredCity : [],
    country : [],
    modalData : {}
}

export const reducer = (state = init , {type , payload }) =>{
        switch(type){

//get city

            case GET_CITY_DATA :{
                return {...state , city :[ ...payload ], 
                        filteredCity : [ ...payload] }
            };

//get country

            case GET_COUNTRY_DATA :{
                return {...state , country : [ ...payload ] }
            };

//add city

            case ADD_CITY_DATA : {

                axios.post("http://localhost:3001/city-list" , payload)
                return{...state, city : [...state.city , payload],
                       filteredCity : [...state.filteredCity , payload]}
            };

//add country

            case ADD_COUNTRY_DATA :{
                 axios.post("http://localhost:3001/country_list" , payload)
                return{...state, country : [...state.country , payload] }
            };

 //sorting

            case SORT_CITY :{

                let data = [...state.city];

                if(payload == "asc_name"){
                     data.sort((a,b) => 
                     a.name > b.name ? 1 : -1
                     );
                } else if(payload == "desc_name"){
                     data.sort((a,b) => 
                     a.name < b.name ? 1 : -1
                     );
                } else if(payload == "asc_pop"){
                     data.sort((a,b) => 
                     a.population > b.population ? 1 : -1
                     );
                } else if(payload == "desc_pop"){
                     data.sort((a,b) => 
                     a.population < b.population ? 1 : -1
                     );
                } else if(payload == "asc_country"){
                     data.sort((a,b) => 
                     a.country > b.country ? 1 : -1
                     );
                } else if(payload == "desc_country"){
                     data.sort((a,b) => 
                     a.country < b.country ? 1 : -1
                     );
                }
                 return{
                      ...state, filteredCity : [...data]
                    }
            };

//modal data

            case MODAL_DATA :{
                 return{
                      ...state, modalData : payload 
                    }
            };

//edit city

            case EDIT_CITY_DATA : {
                 let data = [...state.city];
                 data = data.map(a =>{
                    if( a.id == payload.id){
                        return payload
                    }
                    else{
                         return a;
                    }
                })
                console.log("payload ",payload, data)
               return{
                    ...state, city : data ,
                     filteredCity : data 
                    }
            };

//delete city

            case DELETE_CITY :{
                let data = [...state.city];

                data = data.filter( a =>{
                    return a.id !== payload
                })

                 return{
                      ...state, city : data, 
                      filteredCity : data }

            }
            default : return state;
        }
}


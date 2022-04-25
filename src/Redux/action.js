import { 
    ADD_CITY_DATA, 
    ADD_COUNTRY_DATA, 
    DELETE_CITY, 
    EDIT_CITY_DATA, 
    FILTER_CITY_DATA, 
    GET_CITY_DATA, 
    GET_COUNTRY_DATA,
    MODAL_DATA,
    SORT_CITY 
} from "./actionTypes"


//add city
export const addCityData = (payload) =>{
    return {
        type : ADD_CITY_DATA,
        payload
    }
}

//edit city
export const editCityData = (payload) =>{
    return {
        type : EDIT_CITY_DATA,
        payload
    }
}

//get city
export const getCityData = (payload) =>{
    return {
        type : GET_CITY_DATA,
        payload
    }
}

//filter cities
export const filterCityData = (payload) =>{
    return {
        type : FILTER_CITY_DATA,
        payload
    }
}

//get country
export const getCountryData = (payload) =>{
    return {
        type : GET_COUNTRY_DATA,
        payload
    }
}


//add country
export const addCountryData = (payload) =>{
    return {
        type : ADD_COUNTRY_DATA,
        payload
    }
}


//modal data
export const modalData = (payload) =>{
    return {
        type : MODAL_DATA,
        payload
    }
}


//sorting
export const sortCity = (payload) =>{
    return {
        type : SORT_CITY,
        payload
    }
}


//delete a city
export const deleteCity = (payload) =>{
    return {
        type : DELETE_CITY,
        payload
    }
}
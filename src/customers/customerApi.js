import axios from 'axios';
// const baseUrl = "http://localhost:8082";
const baseUrl = process.env.REACT_APP_BASE_URL;

//country:"uganda",valid:"valid"
const getCustomers = ({country,valid}) => {

    let subUrl = '/customers';
    if(country && country !== 'all'){
        subUrl = `${subUrl}?country=${country}`
    }
    if(valid && valid !== 'all'){
        if(country && country !== 'all'){
            subUrl = `${subUrl}&valid=${valid}`
        }else{
            subUrl = `${subUrl}?valid=${valid}`
        }
    }
    return axios.get(`${baseUrl}/${subUrl}`,
        {
            headers:{
            "Content-Type":"application/json"
        }
    });
};

export default getCustomers;
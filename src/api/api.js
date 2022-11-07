import React from 'react'
import axios from "axios";

 const apiURL = `https://api.imgflip.com/get_memes`;   


export const getMeme = async () => {

  const result = await axios.get(apiURL).then((data) => data.data.data);
 
 return result;
}



import {useState, useEffect} from "react";
// import {getMeme} from "./api/api";
import {Meme} from "./components/meme";


const App = () => {

 
  // first try
//   useEffect(()=> {
//     getMeme().then(data => setMemes(data));
//   }, [])

// console.log(memes.memes);



  return (

    <>
<Meme />
      
    </>
  )

};

export default App;

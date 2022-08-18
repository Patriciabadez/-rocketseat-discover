// import React, { useEffect, useState } from 'react'
// import GlobalStateContext from './GlobalStateContext';
// import { BASE_URL } from '../constants/urls';

// const GlobalState = () => {
//     const [repositories, setRepositories] = useState([])

    
// useEffect(()=>{
//     fetch(`${BASE_URL}/repos`)
//     .then((response)=>response.json())
//     .then(data=> console.log(data))
    
// },[])



// return(
//     <GlobalStateContext.Provider >
//        <div>{repositories.map(repository => {
//         return(
//           <li>
//             <h3>{repository.name}</h3>
//           </li>
//         )
//        })}</div>

//     </GlobalStateContext.Provider>
// )
// }

// export default GlobalState

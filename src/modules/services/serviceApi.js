import { apiSettings } from './settings';
const { BASE_URL } = apiSettings;

const fetchData = async ( ) => {
  const response = await fetch(`${BASE_URL} `);

  if (response.ok) {
    return response.json();
  }
  console.log(`Sorry, but not found pizzas`);
};

// const fetchData=()=>{
//   return new Promise((resolve,reject)=>{
//     fetch(BASE_URL)
//       .then(data=>{
//         data=data.json();
//         resolve(data)
//       })
//   })
// }
const api = {
  fetchData
};

export default api;
/*  pizzaAPI
    .fetchData()
    .then(({ products }) => console.log(products))
    .catch(error => console.log(error));*/

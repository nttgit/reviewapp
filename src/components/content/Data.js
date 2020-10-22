import axios from 'axios';

export const columns = [
  {
    name: "Product",
    selector: "product",
    sortable: true
  },
  {
    name: "Rating",
    selector: "rating",
    sortable: true
  },
  {
    name: "Action",
    selector: "action",
  }
];
 
// Make a request for a user with a given ID
// axios.get('https://thanglocal.omegatheme.com/new-app/BE/test.php?testapi')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

export const datas = [
  {
    id: 1,
    product: "Beetlejuice 1",
    rating: "1",
    action:""
  },
];

import React from 'react';
import {BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import Login from './pages/login';
import Products from './pages/products';
import api from './services/api';


// function isAuthenticated(){
//   var $data;
//   const response =   api.post('/validateToken' ,{
//   });
//   const s = response.then(function(v){
//     $data = v.data;
//     if($data != false){
//       return true
//   } else {
//       return false
//   }


//   }

//   )

  
  
    
// }


//export default 
function RoutesIndex() {
//     const PrivateRoute = ({ component: Component, ...rest }) => (
//         <Route
//           {...rest}
//           render={props =>
//             isAuthenticated() ? (
//               <Component {...props} />
//             ) : (
//               <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//             )
//           }
//         />
//       );
console.log('teste')

    return (
        
      
        // <BrowserRouter>
            <Routes>

{/* <Route path="/" element={<Home />}></Route> */}
                
                {/* <Route path="/" exact element={Login}/>   */}
                <Route path="/" element={<Login/>} exact />  
                <Route path="/products" element={<Products/>} />  
                
                {/* <PrivateRoute path="/products" exact component={Products}/> */}
                {/* <PrivateRoute path="/products/new" exact component={NewProducts}/>
                <PrivateRoute path="/products/:id" exact component={EditProducts}/>
                
                <PrivateRoute path="/users" exact component={Users}/>
                <PrivateRoute path="/cart" exact component={Cart}/> */}
                
                
            </Routes>
        // </BrowserRouter>
        
    );
}

export default RoutesIndex;
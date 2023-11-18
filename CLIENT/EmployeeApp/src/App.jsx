// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GLEmployeeForm from './components/EmployeeForm';
import EmployeeDetails from './components/EmployeeDetails';
import Home from './components/Home';
import ProductCard from './components/TableReusibilty';

function App() {
  const employeeApiEndpoint = 'https://localhost:7190/api/Employee/List';
  const productApiEndpoint = 'https://fakestoreapi.com/products';

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gl-employee-form" element={<GLEmployeeForm />} />
          <Route
            path="/employee-details"
            element={<EmployeeDetails apiEndpoint={employeeApiEndpoint} />}
          />
          <Route
            path="/two-data"
            element={
              <ProductCard
                apiEndpoint={productApiEndpoint}
                isEmployeeData={false}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





//2nd 
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import GLEmployeeForm from './components/EmployeeForm';
// import EmployeeDetails from './components/EmployeeDetails';
// import Home from './components/Home';
// import ProductCard from './components/TableReusibilty';

// function App() {
//   const employeeApiEndpoint = 'https://localhost:7190/api/Employee/List';
//   const productApiEndpoint = 'https://fakestoreapi.com/products';

//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/gl-employee-form" element={<GLEmployeeForm />} />
//           <Route
//             path="/employee-details"
//             element={<EmployeeDetails />}
//           />
//           <Route
//             path="/two-data"
//             element={
//               <ProductCard
//                 apiEndpoint={productApiEndpoint}
//                 isEmployeeData={false}
//               />
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;






// import React from 'react';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import GLEmployeeForm from './components/EmployeeForm';
// import EmployeeDetails from './components/EmployeeDetails';
// import Home from './components/Home';
// import ProductDetails from './components/Product.Details'


// function App() {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/gl-employee-form" element={<GLEmployeeForm />} />
//           <Route path="/employee-details" element={<EmployeeDetails />} />
//           <Route path="/product-details" element={<ProductDetails />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

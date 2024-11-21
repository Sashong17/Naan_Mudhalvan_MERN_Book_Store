// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../Vendor/List.css'
// import { Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import Unavbar from './Unavbar';

// function Myorders() {
//   const [cars, setCars] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     // if (user) {
//       axios
//         .get(`http://localhost:8000/getorders/${user.id}`)
//         .then((response) => {
//           const taskData = response.data;
//           setCars(taskData);
//           console.log(taskData)
//         })
//         .catch((error) => {
//           console.error('Error fetching tasks: ', error);
//         });
//     // } 
//     // else {
//     //   console.log('ERROR');
//     // }
//   }, []);


  

//   return (
//     <div>
//       <Unavbar/>

//       <div>
//         <h1>My Booking</h1>
//         <div>
//           {cars.map((item) => {
//              return (
//               <Card
//                 key={item._id}
//                 style={{
//                   width: '90%',
//                   marginLeft: '65px',
//                   backgroundColor: '#fff',
//                   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//                   borderRadius: '8px',
//                   paddingTop: '15px',
//                   marginBottom: '35px',
//                 }}
//               >
//                 <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//                  <div >
//                  <img src={`http://localhost:8000/${item?.itemImage}`} alt={`${item.itemtype} Image`} style={{height:"80px"}} />
//                  </div>
//                 <div>
//                 <p>ProductName:</p>
//                 <p>{item.itemname}</p>
//                 </div>
        
//                 <div>
//                 <p>Address:</p>
//                 {item.flatno},<br/>{item.city},({item.pincode}),<br/>{item.state}.
//                 </div>
//                 <div>
//               <p>Seller</p>
//                 <p>{item.seller}</p>
//               </div>
//                <div>
//                <p>BookingDate</p>
//                 <p>{item.BookingDate}</p>
//                </div>
//                <div>
//                <p>Delivery By</p>
//                 <p>{item.Delivery}</p>
//                </div>
//               <div>
//               <p>Price</p>
//                 <p>{item.totalamount}</p>
//               </div>
//               <div>
//               <p>Status</p>
//                 <p></p>
//               </div>
//                 </div>
//               </Card>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Myorders;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import Unavbar from './Unavbar';

// function Myorders() {
//   const [cars, setCars] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('user'));

//     axios.get(`http://localhost:8000/getorders/${user.id}`)
//       .then((response) => {
//         const taskData = response.data;
//         // Update order status based on booking date
//         const currentDate = new Date();

//         const updatedOrders = taskData.map((item) => {
//           const bookingDate = new Date(item.BookingDate);

//           if (currentDate === bookingDate) {
//             item.status = "Shipped";
//           } else if (currentDate < bookingDate) {
//             const timeDifference = Math.floor((bookingDate - currentDate) / (1000 * 60 * 60 * 24));
//             if (timeDifference <= 2) {
//               item.status = "On the way";
//             } else if (timeDifference > 7) {
//               item.status = "Delivered";
//             }
//           }

//           return item;
//         });

//         setCars(updatedOrders);
//       })
//       .catch((error) => {
//         console.error('Error fetching tasks: ', error);
//       });
//   }, []);

//   return (
//     <div>
//       <Unavbar/>

//       <div>
//         <h1>My Booking</h1>
//         <div>
//           {cars.map((item) => {
//             return (
//               <Card
//                 key={item._id}
//                 style={{
//                   width: '90%',
//                   marginLeft: '65px',
//                   backgroundColor: '#fff',
//                   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//                   borderRadius: '8px',
//                   paddingTop: '15px',
//                   marginBottom: '35px',
//                 }}
//               >
//                 <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//                   <div >
//                   <img src={`http://localhost:8000/${item?.itemImage}`} alt={`${item.itemtype} Image`} style={{height:"80px"}} />
//                   </div>
//                  <div>
//                  <p>ProductName:</p>
//                  <p>{item.itemname}</p>
//                  </div>
        
//                  <div>
//                  <p>Address:</p>
//                  {item.flatno},<br/>{item.city},({item.pincode}),<br/>{item.state}.
//                  </div>
//                  <div>
//                <p>Seller</p>
//                  <p>{item.seller}</p>
//                </div>
//                 <div>
//                 <p>BookingDate</p>
//                  <p>{item.BookingDate}</p>
//                 </div>
//                 <div>
//                 <p>Delivery By</p>
//                  <p>{item.Delivery}</p>
//                 </div>
//                <div>
//                <p>Price</p>
//                  <p>{item.totalamount}</p>
//                </div>
//                <div>
//                <p>Status</p>
//                </div>
//                  </div>

               
//               </Card>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Myorders;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Seller/List.css';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Unavbar from './Unavbar';
import Footer from '../Componenets/Footer';

function Myorders() {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
    axios
      .get(`http://localhost:4000/getorders/${user.id}`)
      .then((response) => {
        const taskData = response.data;
        setCars(taskData);
        console.log(taskData);
      })
      .catch((error) => {
        console.error('Error fetching tasks: ', error);
      });
    } else {
      console.log('ERROR');
    }
  }, []);




  // Function to calculate the status based on the delivery date
  const calculateStatus = (Delivery) => {
    const currentDate = new Date();
    const formattedDeliveryDate = new Date(Delivery);

    if (formattedDeliveryDate >= currentDate) {
      return "ontheway";
    } else {
      return "delivered";
    }
  };

 return (
  <div>
    <Unavbar />
    <div className="container mx-auto mt-12">
      <h3 className="text-3xl font-semibold mb-8 text-center text-black-400">My Orders</h3>
      <div className="w-full">
        {cars.map((item) => {
          const status = calculateStatus(item.Delivery);

          return (
            <Card
              key={item._id}
              style={{
                backgroundColor: '#1a1a1a', // Black background
                color: '#f1c40f', // Gold text color
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                borderRadius: '12px',
                border: '2px solid #f1c40f', // Gold border
                padding: '20px',
                marginBottom: '20px',
                width: '100%', // Full width card
              }}
            >
              <div className="flex items-center space-x-6">
                {/* Image Section on Left */}
                <div className="flex-shrink-0">
                  <img
                    src={`http://localhost:4000/${item.itemImage}`}
                    alt={`${item.itemtype} Image`}
                    style={{
                      height: '250px', // Increased height
                      width: 'auto', // Keep aspect ratio intact
                      borderRadius: '8px',
                      border: '2px solid #f1c40f', // Gold border around image
                    }}
                  />
                </div>

                {/* Order Details Section on Right */}
                <div className="flex-grow text-white">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    
                    <div>
                      <p className="font-semibold text-yellow-400">Order ID:</p>
                      <p className="text-white">{item._id}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-yellow-400">Customer Name:</p>
                      <p className="text-white">{item.userName}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-yellow-400">Booking Date:</p>
                      <p className="text-white">{item.BookingDate}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-yellow-400">Address:</p>
                      <p className="text-white">
                        {item.flatno}, {item.city} ({item.pincode}), {item.state}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-yellow-400">Delivery By:</p>
                      <p className="text-white">{item.Delivery}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-yellow-400">Warranty:</p>
                      <p className="text-white">1 Year</p>
                    </div>
                    <div>
                      <p className="font-semibold text-yellow-400">Price:</p>
                      <p className="text-white">&#8377; {item.totalamount}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-yellow-400">Status:</p>
                      <p className="text-white">{status}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  </div>
);

}

export default Myorders;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Snavbar from './Snavbar';

function Orders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch items data
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios
        .get(`http://localhost:4000/getsellerorders/${user.id}`)
        .then((response) => {
          setOrders(response.data);
        })
        .catch((error) => {
          console.error('Error fetching bookings: ', error);
        });
    }
  }, []);

  // Function to calculate the status based on the delivery date
  const calculateStatus = (Delivery) => {
    const currentDate = new Date();
    const formattedDeliveryDate = new Date(Delivery);

    if (formattedDeliveryDate >= currentDate) {
      return 'On the Way';
    } else {
      return 'Delivered';
    }
  };

  return (
    <div>
      <Snavbar />
      <div className="container mx-auto mt-12">
        <h3 className="text-3xl font-semibold mb-8 text-center text-black-400">Orders</h3>
        <div className="w-full">
          {orders.map((item) => {
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
                      src={`http://localhost:4000/${item?.itemImage}`}
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
                        <p className="text-white">{item.userId}</p>
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
                        <p className="text-white">${item.price || item.totalamount}</p>
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

export default Orders;

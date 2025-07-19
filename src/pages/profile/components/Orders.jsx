import React from 'react';

const Orders = () => {
  const orders = [
    {
      id: 'ORD123456',
      date: 'July 15, 2025',
      status: 'Delivered',
      amount: '$150.00',
    },
    {
      id: 'ORD123457',
      date: 'July 12, 2025',
      status: 'Processing',
      amount: '$89.99',
    },
    {
      id: 'ORD123458',
      date: 'July 10, 2025',
      status: 'Cancelled',
      amount: '$0.00',
    },
    {
      id: 'ORD123458',
      date: 'July 10, 2025',
      status: 'Delivered',
      amount: '$0.00',
    },
  ];

  const getStatusColor = status => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-700';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-700';
      case 'Cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="px-4">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">My Orders</h2>
      <div className="w-[180px] h-[3px] bg-blue-600 mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {orders.map((order, index) => (
          <div
            key={index}
            className="rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 bg-white p-6 flex flex-col justify-between"
          >
            <div className="mb-4">
              <h4 className="text-lg font-bold text-gray-700 mb-2">
                Order ID:{' '}
                <span className="font-medium text-gray-600">{order.id}</span>
              </h4>
              <p className="text-sm text-gray-500">Date: {order.date}</p>
              <span
                className={`inline-block px-3 py-1 mt-3 text-sm font-medium rounded-full ${getStatusColor(
                  order.status
                )}`}
              >
                {order.status}
              </span>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <p className="text-xl font-semibold text-gray-800">
                {order.amount}
              </p>
              <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

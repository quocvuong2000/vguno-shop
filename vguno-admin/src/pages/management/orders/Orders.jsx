import React from 'react';
import DataTableOrders from '../../../components/dataTable/dataTableOrders/DataTableOrders';
import './order.scss';
const Orders = () => {
  return (
    <div className='order'>
        <div className="order__title">
            Danh sách đơn đặt hàng vừa nhận
        </div>
        <DataTableOrders></DataTableOrders>
    </div>
  )
}

export default Orders
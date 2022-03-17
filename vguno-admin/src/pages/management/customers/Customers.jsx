import React from 'react'
import DataTableCustomers from '../../../components/dataTable/dataTableCustomer/DataTableCustomer';
import './customer.scss';
const Customers = () => {
  return (
    <div className='customer'>
        <div className="customer__title">
            Danh sách tài khoản khách hàng vừa đăng kí
        </div>
        <DataTableCustomers></DataTableCustomers>
    </div>
  )
}

export default Customers
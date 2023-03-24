import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useGlobalContext } from '../context'
function AdminRoute({ children }) {

  const {userDetails} = useGlobalContext()
  
  const isAdmin = ()=>{
    console.log(userDetails,'some');
    if(userDetails?.role === 'ADMIN'){
      return true
    }else{
      return false
    }
  }
  if (!isAdmin()) {
    return <Navigate to="/" replace />
  }
  return children
}
export default AdminRoute
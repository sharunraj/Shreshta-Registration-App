import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useGlobalContext } from '../context'
function UserRoute({ children }) {

  const {userDetails} = useGlobalContext()

  
  const isUser = ()=>{
    if(userDetails?.role === 'USER'){
        return true
    }else{
      return false
    }
  }
  if (!isUser()) {
    return <Navigate to="/admin" replace />
  }
  return children
}
export default UserRoute
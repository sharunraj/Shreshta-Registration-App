import React from 'react'
import { Navigate } from 'react-router-dom'
function ProtectedRoute({ children }) {
  const isLoggedIn = ()=>{
    if(localStorage.getItem('user_token')){
      return true
    }else{
      return false
    }
  }
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />
  }
  return children
}
export default ProtectedRoute
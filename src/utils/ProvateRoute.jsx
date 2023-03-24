import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useGlobalContext } from '../context'
function ProtectedRoute({ children }) {

  const {fetchUserDetails, userDetails} = useGlobalContext()
  useEffect(() => {
    if(!userDetails){
      fetchUserDetails()
    }
  }, [])
  
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
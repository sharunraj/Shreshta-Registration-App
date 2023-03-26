import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useGlobalContext } from '../context'
function ProtectedRoute({ children }) {

  const {fetchUserDetails, userDetails} = useGlobalContext()
  useEffect(() => {
    if(!userDetails){
      console.log('private route',userDetails);
      fetchUserDetails()
    }
  }, [])
  
  const isLoggedIn = ()=>{
    if(localStorage.getItem('user_token') && (new Date() > new Date(JSON.parse(localStorage.getItem('user_token')).expiry))){
      return false
    }else{
      return true
    }
  }
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />
  }
  return children
}
export default ProtectedRoute
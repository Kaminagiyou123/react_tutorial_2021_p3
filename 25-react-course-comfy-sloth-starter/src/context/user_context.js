import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
// import { GiConsoleController } from 'react-icons/gi'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0()

  const [myUser, setMyUser] = useState(null)

  useEffect(() => {
    if (user) {
      setMyUser(user)
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      setMyUser(false)
      localStorage.setItem('user', null)
    }
  }, [user])
  return (
    <UserContext.Provider
      value={{ loginWithRedirect, logout, myUser, isLoading }}
    >
      {children}
    </UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}

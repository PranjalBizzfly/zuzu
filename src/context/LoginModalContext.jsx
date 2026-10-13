/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'

const LOGIN_PATH = '/log-in'

const LoginModalContext = createContext(null)

/*
  The modal itself never changes what route is mounted (it's a portaled
  overlay, see LoginModal.jsx) -- but product wants the address bar to
  read /log-in while it's open. Driving that through react-router's
  navigate() would actually change the matched route (falling through to
  the catch-all NotFound route, since /log-in isn't registered) and swap
  out whatever page is sitting behind the modal. Pushing directly onto
  the browser history instead updates only the visible URL, leaving the
  background page -- and everything reading useLocation() -- untouched.
*/
export function LoginModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const previousPathRef = useRef(null)

  const openLogin = useCallback(() => {
    if (previousPathRef.current === null) {
      previousPathRef.current = `${window.location.pathname}${window.location.search}${window.location.hash}`
      window.history.pushState({ zuzuLoginModal: true }, '', LOGIN_PATH)
    }
    setIsOpen(true)
  }, [])

  const closeLogin = useCallback(() => {
    setIsOpen(false)
    if (previousPathRef.current !== null) {
      if (window.location.pathname === LOGIN_PATH) {
        window.history.pushState({}, '', previousPathRef.current)
      }
      previousPathRef.current = null
    }
  }, [])

  // Covers the browser Back button: popping away from the pushed
  // /log-in entry should close the modal instead of leaving it open
  // over whatever page the user just landed on.
  useEffect(() => {
    function handlePopState() {
      if (window.location.pathname !== LOGIN_PATH) {
        previousPathRef.current = null
        setIsOpen(false)
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const value = useMemo(() => ({ isOpen, openLogin, closeLogin }), [isOpen, openLogin, closeLogin])

  return <LoginModalContext.Provider value={value}>{children}</LoginModalContext.Provider>
}

export function useLoginModal() {
  const ctx = useContext(LoginModalContext)
  if (!ctx) {
    throw new Error('useLoginModal must be used within a LoginModalProvider')
  }
  return ctx
}

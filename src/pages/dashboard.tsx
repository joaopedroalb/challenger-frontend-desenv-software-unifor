import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import DashboardLayout from '../components/DashboardLayout'

export default function Dashboard() {
  const router = useRouter()
  const {route} = router
  const {id} = router.query

  useEffect(() => {
  }, [route,id])
  

  return (
    <DashboardLayout id={id}/>
  )
}

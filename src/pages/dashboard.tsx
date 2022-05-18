import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import DashboardLayout from '../components/DashboardLayout'

export default function Dashboard() {
  const router = useRouter()
  const {login,seed,page,results} = router.query

  const getValueString = (value:any) =>{
    if(typeof value == 'string')
      return value
    return ''
  }
  

  return (
    <DashboardLayout  login={getValueString(login)}
                      seed={getValueString(seed)}
                      page={getValueString(page)}
                      results={getValueString(results)}
    />
  )
}

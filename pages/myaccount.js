import { useRouter } from 'next/router';
import React, {useEffect} from 'react'

const myaccount = () => {
    const router = useRouter();
    useEffect(() => {
      if(!localStorage.getItem('token')){
        router.push('/')
      }
     }, [router.query])
  return (
    <div>
      my accoun
    </div>
  )
}

export default myaccount
"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

const BasePage = () => {

const router = useRouter();
return router.replace('/login');

}

export default BasePage;
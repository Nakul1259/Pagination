import React, { useEffect, useState } from 'react'
import paginate from './util'
const url = "https://api.github.com/users/john-smilga/followers?per_page=100"

 export const useFetch = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchProfile = async() => {
        const res = await fetch(url)
        const data = await res.json()
        setData(paginate(data))
        setLoading(false)       
    }
    console.log(data);

    useEffect(() => {
        fetchProfile()
    },[])

  return {loading, data}
}


import axios from "axios"
import { useEffect, useState } from "react"


const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        axios.get(url)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
    }, [url])
}

export default useRequestData;
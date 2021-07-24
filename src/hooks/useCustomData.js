import {useState} from "react"
export const useCustomData =() => {
    const [data,setData] = useState('Initial Value');

    return {
        data,setData
    }
}
import { API_URL } from "@/config"
import axios from "axios"


export const getBusinessHub = async() => {
    const response = await axios.get(`${API_URL}/business-units`)
    return response.data
    
} 
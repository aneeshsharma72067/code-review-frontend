"use client"

import axios, { AxiosError } from 'axios'

export const getSoftwareQualityScore = async (code: string) => {
    try {
        if (code.length === 0) throw new AxiosError("No code provided")
        const response = await axios.post('http://127.0.0.1:5000/analyze', { code: code })
        console.log(response);

        return { success: true, data: response.data };
    }
    catch (err) {
        console.log(err);
        const error = err as AxiosError
        return { success: false, data: error.message };
    }
}

export const getOptimizedCode = async (code: string) => {
    try {
        if (code.length === 0) throw new AxiosError("No Code Provided")
        const response = await axios.post('http://127.0.0.1:5000/optimize', { code: code })
        console.log(response)

        return { success: true, data: response.data }
    }
    catch (err) {
        console.log(err);
        const error = err as AxiosError
        return { success: false, data: error.message };
    }
}
import axios, { AxiosError } from 'axios'

export const getSoftwareQualityScore = async (code: string) => {
    try {
        if (code.length === 0) throw new AxiosError("No code provided")
        const response = await axios.post('http://127.0.0.1:5000/analyze', { code: code })
        return { success: true, data: response.data };
    }
    catch (err) {
        const error = err as AxiosError
        return { success: false, data: error.message };
    }
}
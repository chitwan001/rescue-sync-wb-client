import axios, {AxiosRequestConfig} from "axios";
import {METHOD, ResponseType} from "../types";

async function requestWrap<T>(method: METHOD, url: string, data: Object | {}, options: AxiosRequestConfig<any>, addError: (data: ResponseType<any>) => void): Promise<{
    response:ResponseType<T>,
    headers:{}
}> {
    let response: ResponseType<T> = {
        success: false,
        data: null,
        error: null,
        code: 404
    };
    let apiError: ResponseType<T> = {
        success: false,
        data: null,
        error: null,
        code: 404
    };
    let headers = {}
    try {

        if (method === 'GET') {
            const res = await axios.get(url, options);
            response = res.data;
            headers = res.headers

        } else if (method === 'POST') {
            const res = await axios.post(url,data, options);
            response = res.data;
            headers = res.headers
        }
    } catch (error: any) {
        if (error.code === axios.AxiosError.ERR_NETWORK) {
            apiError.code = 503;
            apiError.data = null;
            apiError.error = {
                message: 'Cannot connect to server!'
            };
            apiError.success = false;
            return {response:apiError,headers:{}};
        }
        if (axios.isAxiosError(error)) {
            apiError.code = error.response?.data.code;
            apiError.data = error.response?.data.data;
            apiError.error = error.response?.data.error;
            apiError.success = error.response?.data.success;
            return {response:apiError,headers:{}};
        }
    }
    return {response,headers};
}

export default async function makeRequest<T>(method: METHOD, url: string, data: Object | {}, options: AxiosRequestConfig<any> = {}, addError: (data: ResponseType<any>) => void, setLoading: any): Promise<{
    response: ResponseType<T>,
    headers:{},
    displaySuccessMessage: () => void
}> {
    setLoading(true);
    const {response,headers} = await requestWrap<T>(method, url, data, options, addError);
    if (response) {
        if (!response.success) {
            addError(response);
        }
    }
    setLoading(false);
    const displaySuccessMessage = () => {
        if (response) {
            if (response.success) {
                addError(response)
            }
        }
    }
    return {response,headers, displaySuccessMessage};
}
import axios, { AxiosError } from "axios";

export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL + "/api/v1"
export const SERVER_URL_IMG = process.env.NEXT_PUBLIC_SERVER_URL

const instance = axios.create({
    baseURL: SERVER_URL,
    withCredentials: true,
});

instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error: AxiosError) => {
        const statusError = error.response?.status;
        if (statusError === 401) {
            console.log("Unauthorized access - perhaps redirect to login?");
        }
        if (statusError === 403) {
            window.location.href = "/login"
        }
        return Promise.reject(error);
    }
);

export const get = async (url: string) => {
    try {
        const result = await instance.get(url);
        return result.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const post = async (url: string, data: any) => {
    try {
        const result = await instance.post(url, data);
        return result.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

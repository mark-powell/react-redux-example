import axios, { AxiosInstance } from "axios";
import { HTTP_API_URL } from "services/configuration/environment";
import { IHttpClient } from "./types";

export class AxiosClient implements IHttpClient {

    private axiosInstance: AxiosInstance

    constructor(baseUrl: string) {
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
        })
    }

    public get<Request, Response>(url: string, params: Request): Promise<Response> {
        return this.axiosInstance.get(url, { params });
    }
    
    public post<Request, Response>(url: string, params: Request): Promise<Response> {
        return this.axiosInstance.post(url, params);
    }

}
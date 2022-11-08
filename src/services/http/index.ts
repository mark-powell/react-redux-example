import { AxiosClient } from "./axiosClient";
import { IHttpClient } from "./types";

export class HttpService {
    private httpClient: IHttpClient;

    constructor(baseUrl: string) {
        this.httpClient = new AxiosClient(baseUrl);
    }

    public get<Request, Response>(url: string, params: Request): Promise<Response> {
        return this.httpClient.get(url, params);
    }

    public post<Request, Response>(url: string, params: Request): Promise<Response> {
        return this.httpClient.post(url, params);
    }
}

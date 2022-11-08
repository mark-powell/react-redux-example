export interface IHttpClient {
    get<Request, Response>(url: string, params: Request): Promise<Response>;
    post<Request, Response>(url: string, params: Request): Promise<Response>;
}
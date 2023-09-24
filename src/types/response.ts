export interface dataInterface<T> {
    body: T,
    message: string
}

export interface errorInterface {
    message: string,
}

export type ResponseType<T> = {
    success: boolean,
    code: number,
    data: dataInterface<T> | null,
    error: errorInterface | null
}
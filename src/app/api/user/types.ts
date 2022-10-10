
export interface User {
    email: string
    password: string
}

export interface UserLoginResponseSuccess {
    success: boolean
    data: {
        token: string
    }
}

export interface UserLoginResponseFail {
    error: string
    message: string
    statusCode: number
    success: boolean
    timestamp: string
}
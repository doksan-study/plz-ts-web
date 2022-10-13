// Login
export interface User {
    email: string
    password: string
}

export interface UserLoginResponseSuccess {
    success: boolean
    data: string
}

export interface UserLoginResponseFail {
    error: string
    message: string
    statusCode: number
    success: boolean
    timestamp: string
}

export interface MyInfo {
    data : {
        success: boolean,
        data: {
            id: string
            email: string
            name: string
            phone: string
            authLevel: number
        }
    }

}
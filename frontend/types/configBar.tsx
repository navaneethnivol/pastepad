export interface PadExpiryConfig {
    type: 'views' | 'time',
    count: number,
    custom: boolean
}


export interface PadData {
    type: 'views' | 'time',
    count: number,
    custom: boolean,
    input: string
}
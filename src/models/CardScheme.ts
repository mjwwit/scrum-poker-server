export interface CardScheme{
    type: string,
    scheme: any[]
}

export interface FibonacciScheme extends CardScheme {
    readonly type: 'fibonacci'
    readonly scheme: [0,1,2,3,5,8,13,21];
}


export interface RegularScheme extends CardScheme {
    readonly type: 'regular'
    readonly scheme: [0, .5, 1, 2, 3, 5, 8, 13, 20];
}

export interface CustomScheme extends CardScheme {
    readonly type: 'custom'
    readonly scheme: (string|number)[];
}
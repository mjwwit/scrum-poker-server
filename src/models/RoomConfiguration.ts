export interface RoomConfiguration {
    name: string,
    cardSchemeType: 'custom' | 'regular' | 'fibonacci',
    timeout: number,
    scheme?: (string|number)[]
}
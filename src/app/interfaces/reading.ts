export interface Reading {
    uuid: string
    kindOfMeter: string;
    comment: string;
    meterId: number;
    meterCount: number;
    substitute: boolean;
    dateOfReading: string;
}
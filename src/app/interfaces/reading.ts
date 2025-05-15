export interface Reading {
    uuid: string
    customerId: number;
    kindOfMeter: string;
    comment: string;
    meterId: number;
    meterCount: number;
    substitute: boolean;
    dateOfReading: string;
}
import { Customer } from "./customer";

export interface Reading {
    uuid: string
    customerId: number;
    kindOfMeter: string;
    comment: string;
    meterId: string;
    meterCount: number;
    substitute: boolean;
    dateOfReading: string;
    customer: Customer;
}
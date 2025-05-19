export interface Customer {
    id?: number;
    uuid: string;
    firstName: string;
    lastName: string;
    gender: string;
    birthDate: Date | string;
};
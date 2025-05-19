import { Customer } from "../interfaces/customer";


const list: Customer[] = [
    {
        id: 1,
        uuid: 'uuid',
        firstName: 'Mary',
        lastName: 'Surname',
        gender: "female",
        birthDate: new Date()
    },
    {
        id: 2,
        uuid: 'uuid',
        firstName: 'Jhon',
        lastName: 'Surname',
        gender: "male",
        birthDate: new Date()
    },
    {
        id: 3,
        uuid: 'uuid',
        firstName: 'Helena',
        lastName: 'Surname',
        gender: "female",
        birthDate: new Date()
    },
    {
        id: 4,
        uuid: 'uuid',
        firstName: 'Name',
        lastName: 'Surname',
        gender: "male",
        birthDate: new Date()
    },
    {
        id: 5,
        uuid: 'uuid',
        firstName: 'Richard',
        lastName: 'Surname',
        gender: "female",
        birthDate: new Date()
    }
];


export { list };
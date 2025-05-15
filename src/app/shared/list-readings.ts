import { Reading } from "../interfaces/reading"

const listOfreading: Reading[] = [
  {
    uuid: 'uuid',
    customerId: 111,
    kindOfMeter: "Energy",
    comment: "Routine monthly reading",
    meterId: "101",
    meterCount: 15230,
    substitute: true,
    dateOfReading: "01-05-2025",
      customer: {
      id: 111,
      uuid: '',
      firstName: '',
      lastName: '',
      gender: 'M',
      birthDate: '1900-01-01'
    }
  },
  {
    uuid: 'uuid',
    customerId: 222,
    kindOfMeter: "Water",
    comment: "Slightly higher than usual",
    meterId: "202",
    meterCount: 847,
    substitute: true,
    dateOfReading: "01-05-2025",
      customer: {
      id: 111,
      uuid: '',
      firstName: '',
      lastName: '',
      gender: 'M',
      birthDate: '1900-01-01'
    }
  },
  {
    uuid: 'uuid',
    customerId: 333,
    kindOfMeter: "Energy",
    comment: "After maintenance",
    meterId: "101",
    meterCount: 15400,
    substitute: true,
    dateOfReading: "01-06-2024",
      customer: {
      id: 111,
      uuid: '',
      firstName: '',
      lastName: '',
      gender: 'M',
      birthDate: '1900-01-01'
    }
  },
  {
    uuid: 'uuid',
    customerId: 444,
    kindOfMeter: "Water",
    comment: "Normal usage",
    meterId: "202",
    meterCount: 900,
    substitute: true,
    dateOfReading: "01-06-2024",
      customer: {
      id: 111,
      uuid: '',
      firstName: '',
      lastName: '',
      gender: 'M',
      birthDate: '1900-01-01'
    }
  },
  {
    uuid: 'uuid',
    customerId: 555,
    kindOfMeter: "Energy",
    comment: "New tenant started",
    meterId: "103",
    meterCount: 500,
    substitute: true,
    dateOfReading: "10-05-2025",
      customer: {
      id: 111,
      uuid: '',
      firstName: '',
      lastName: '',
      gender: 'M',
      birthDate: '1900-01-01'
    }
  }
];

export {listOfreading};


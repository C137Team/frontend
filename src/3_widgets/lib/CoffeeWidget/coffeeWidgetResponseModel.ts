export interface ICoffeeWidgetResponseModel {
    meeting: Meeting;
}

export interface Meeting {
    id:            number;
    state:         string;
    curcumstances: Curcumstances;
    participants:  Participant[];
    created_at:    Date;
}

export interface Curcumstances {
    starts_at:          Date;
    duration_m:         number;
    format:             string;
    location_latitude:  number;
    location_longitude: number;
}

export interface Participant {
    employee: Employee;
}

export interface Employee {
    role:   string;
    person: Person;
}

export interface Person {
    id:           number;
    full_name:    string;
    age:          number;
    description:  string;
    post:         string;
    display_text: string;
}

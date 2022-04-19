export interface BaseEmployee {
    full_name: string;
    email_address: string;
    age: string;
    position: string;
}

export interface Employee extends BaseEmployee {
    id: number;
}
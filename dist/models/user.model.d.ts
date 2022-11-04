import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: number;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    contact: string;
    role: string;
    address: string;
    cid?: number;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;

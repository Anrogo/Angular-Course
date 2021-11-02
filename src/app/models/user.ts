export class User {

    private _id!: number;
    private _name!: string;
    private _username!: string;
    private _email!: string;
    private _address!: Array<string>;
    private _phone!: string;
    private _website!: string;
    private _company!: Array<string>;
   
    constructor(id:number, name: string, username: string, email: string, address: Array<string>, phone: string, website: string, company: Array<string>){
        this._id = id;
        this._name = name;
        this._username = username;
        this._email = email;
        this._address = address;
        this._phone = phone;
        this._website = website;
        this._company = company;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    public get address(): Array<string> {
        return this._address;
    }
    public set address(value: Array<string>) {
        this._address = value;
    }
    
    public get phone(): string {
        return this._phone;
    }
    public set phone(value: string) {
        this._phone = value;
    }

    public get website(): string {
        return this._website;
    }
    public set website(value: string) {
        this._website = value;
    }

    public get company(): Array<string> {
        return this._company;
    }
    public set company(value: Array<string>) {
        this._company = value;
    }
    
}
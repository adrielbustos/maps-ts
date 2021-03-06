import faker from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string;
    constructor() {
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
        this.color = "red";
    }
    markerContent():string {
        return `company Name: ${this.name}`
    }
}
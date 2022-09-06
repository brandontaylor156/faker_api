import {faker} from '@faker-js/faker';
import express from 'express';

const app = express();

// middleware
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class User {
    constructor(){
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.password = faker.internet.password();
        this.email = faker.internet.email(this.firstName, this.lastName);
        this.phoneNumber = faker.phone.number();
        this.id = faker.database.mongodbObjectId();
    }

}

class Company {
    constructor(){
        this.name = faker.company.name();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            state: faker.address.state()
        }
    }
}

app.get('/api/users/new', (req, res) => {
    res.json(new User())
})

app.get('/api/companies/new', (req, res) => {
    res.json(new Company())
})

app.get('/api/user/company', (req, res) => {
    res.json([new User(), new Company()])
})

app.listen(8000, () => {
    console.log("listening");
})
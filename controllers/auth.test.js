/*
- the response must have a status code of 200
- the response must return a token
- the response should return a user object with 2 fields email and subscription of the String data type
*/

const request = require("supertest");
const baseURL = "http://localhost:3000/users";

const userParams = {
    "email": "igorm@gmail.com",
    "password": "123456"
};

describe("Test the /users/login", ()=> {
    test("/login the response must have a status code of 200", async () => {
        const response = await request(baseURL).post("/login").send(
            userParams
        );
        expect(response.statusCode).toBe(200);
    });

    test("/login the response must return a token", async () => {
        const response = await request(baseURL).post("/login").send(
            userParams
        );
        expect(response.body.token).toBeDefined();
    });

    test("/login the response should return a user object with 2 fields email and subscription of the String data type", async () => {
        const response = await request(baseURL).post("/login").send(
            userParams
        );
        const {email, subscription} = response.body.user;
        expect(typeof email).toBe("string");
        expect(typeof subscription).toBe("string");
    });
    
});
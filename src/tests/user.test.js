const request = require("supertest");
const app = require("../../app");
const {deleteAllUsersOnDB} = require('../db/methods/users')

describe("POST /users", () => {
    test("It should create a new User", async (done) => {
        await deleteAllUsersOnDB()
        request(app)
            .post("/api/users")
            .send({
                "UserName": "Ian",
                "UserLastName": "Alvarez",
                "UserEmail": "aeap@gmail.com",
                "UserPassword": "12345738",
                "UserActive": true,
                "UserRol": "admin"
            })
            .then(response => {
                expect(response.statusCode).toBe(201);
                done();
            });
    })
    test("You shouldn't create a new user for repeating mail", async (done) => {
        request(app)
            .post("/api/users")
            .send({
                "UserName": "Adolfo",
                "UserLastName": "Pacheco",
                "UserEmail": "aeap@gmail.com",
                "UserPassword": "12345738",
                "UserActive": true,
                "UserRol": "admin"
            })
            .then(response => {
                expect(response.statusCode).toBe(400);
                done();
            });
    });
});

describe("GET /users", () => {
    test("It should get Users", done => {
            request(app)
                .get("/api/users?offset=0&limit=20&rol=admin")
                .then(response => {
                    expect(response.statusCode).toBe(200);
                    done();
                });
        }),
        test("It shouldn't get Users for invalid rol", done => {
            request(app)
                .get("/api/users?offset=0&limit=20&rol=suplente")
                .then(response => {
                    expect(response.statusCode).toBe(400);
                    done();
                });
        }),
        test("It shouldn't get Users for invalid offset", done => {
            request(app)
                .get("/api/users?offset=")
                .then(response => {
                    expect(response.statusCode).toBe(400);
                    done();
                });
        }),
        test("It shouldn't get Users for invalid query", done => {
            request(app)
                .get("/api/users?offset=0&limit=20&rol=admin/status=true")
                .then(response => {
                    expect(response.statusCode).toBe(400);
                    done();
                });
        })
});
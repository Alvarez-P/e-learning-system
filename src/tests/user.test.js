const request = require("supertest");
const app = require("../../app");
const { deleteAllUsersOnDB } = require('../db/methods/users')
const { TOKEN } = require('./mocks')
const { response } = require("../../app");

describe("POST /users", () => {
    test("It should create a new User", async(done) => {
        await deleteAllUsersOnDB()
        request(app)
            .post("/api/users")
            .set('Authorization', `Token ${TOKEN}`)
            .send({
                "UserName": "Esteban",
                "UserLastName": "Alvarez",
                "UserEmail": "aeap@gmail.com",
                "UserPassword": "12345738",
                "UserActive": true,
                "UserRol": "admin"
            })
            .then(response => {
                console.log(response)
                expect(response.statusCode).toBe(201);
                done();
            });
    })
    test("You shouldn't create a new user for repeating mail", async(done) => {
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

describe("POST /auth", () => {
    test("It should login for the user and create a token", async(done) => {
        request(app)
            .post("/api/auth")
            .send({
                "UserEmail": "aeap@gmail.com",
                "UserPassword": "12345738"
            })
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    })
    test("You shouldn't login for the user or create a token because the password is wrong", async(done) => {
        request(app)
            .post("/api/auth")
            .send({
                "UserEmail": "aeap@gmail.com",
                "UserPassword": "1234573814"
            })
            .then(response => {
                expect(response.statusCode).toBe(401);
                done();
            });
    })
    test("You shouldn't login for the user or create a token because the email is wrong or not exits", async(done) => {
        request(app)
            .post("/api/auth")
            .send({
                "UserEmail": "aeap@gmail.comcom",
                "UserPassword": "12345738"
            })
            .then(response => {
                expect(response.statusCode).toBe(400);
                done();
            });
    });
});
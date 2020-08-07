const request = require("supertest");
const app = require("../../app");

describe("POST /users", () => {
    test("It should create a new User", done => {
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
        test("It should get Users", done => {
            request(app)
                .get("/api/users?offset=0&limit=20&rol=suplente")
                .then(response => {
                    expect(response.statusCode).toBe(400);
                    done();
                });
        }),
        test("It should get Users", done => {
            request(app)
                .get("/api/users?offset=")
                .then(response => {
                    expect(response.statusCode).toBe(400);
                    done();
                });
        }),
        test("It should get Users", done => {
            request(app)
                .get("/api/users?offset=0&limit=20&rol=admin/status=true")
                .then(response => {
                    expect(response.statusCode).toBe(400);
                    done();
                });
        })
});
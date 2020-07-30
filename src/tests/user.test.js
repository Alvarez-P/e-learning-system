const request = require("supertest");
const app = require("../../app");

describe("POST /users", () => {
  test("It should create a new User", done => {
    request(app)
      .post("/api/users")
      .send({
        "UserName": "Adolfo",
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
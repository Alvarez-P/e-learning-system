const request = require("supertest");
const app = require("../../app");
const {deleteAllEnrollmentsOnDB} = require('../db/methods/enrollments');

describe("POST /enrollments", () => {
    test("It should create a new enrollment", async (done) => {
        await deleteAllEnrollmentsOnDB()
        request(app)
            .post("/api/enrollments")
            .send({
                "EnrollmentStudentID": "ee48cc1e-fbf0-47c4-acb6-b32840dde31c",
                "EnrollmentCourseID": "ee48cc1e-fbf0-47c4-acb6-b32840dde31c",
                "EnrollmentCostCourse": "100",
                "EnrollmentPaidOut": false,
                "EnrollmentActive": true
            })
            .then(response => {
                expect(response.statusCode).toBe(201);
                done();
            });
    })
    test("You shouldn't create a new enrollment for text boolean", async (done) => {
        request(app)
            .post("/api/enrollments")
            .send({
                "EnrollmentStudentID": "ee48cc1e-fbf0-47c4-acb6-b32840dde31c",
                "EnrollmentCourseID": "ee48cc1e-fbf0-47c4-acb6-b32840dde31c",
                "EnrollmentCostCourse": "100",
                "EnrollmentPaidOut": "false",
                "EnrollmentActive": true
            })
            .then(response => {
                expect(response.statusCode).toBe(400);
                done();
            });
    });
});
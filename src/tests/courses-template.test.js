const request = require('supertest');
const app = require('../../app');
const { TestScheduler } = require('jest');
const { response } = require('../../app');

describe('POST /course-templates', () => {
    test('It should create a new course template', done => {
        request(app)
        .post('/api/course-templates')
        .send({
            CourseTemplateName: 'Nodejs',
            CourseTemplateContent: ['Introducción', 'Desarrollo', 'Producción'],
            CourseTeplateRequirements: ['JavaScript', 'npm install'],
            CourseTemplateMaterial: ['URL1', 'URL2'],
            CourseTemlateTeacher: 'Juan López',
            CourseTemplateDescription: true,
            CourseTempleteTags: ['Backend', 'JS', 'Restful'],
            CourseTemplateActive: true
        })
        .then( response => {
            expect(response.statusCode).toBe(201);
            done();
        });
    });
});
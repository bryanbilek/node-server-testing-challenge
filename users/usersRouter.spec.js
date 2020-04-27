const request = require('supertest');
const db = require('../data/dbConfig');
const server = require('../server')

describe('server', function () {
    describe('GET /users req', function () {
        it ('should return 200 status', function() {
            return request(server)
            .get('/api/users')
            .then(res => {
                expect(res.status).toBe(200);
            });
        });
    });

    describe("POST /users req", function () {
        beforeEach(async () => {
          await db('users').truncate(); // empty the table and reset the id back to 1
        });
    
        it("return 201 on success", function () {
          return request(server)
            .post("/api/users")
            .send({ first_name: 'first', last_name: 'last' })
            .then(res => {
              expect(res.status).toBe(201);
            });
        });
    
        it('should return a message saying "user created successfully"', function () {
          return request(server)
            .post("/api/users")
            .send({ first_name: 'first', last_name: 'last' })
            .then(res => {
              expect(res.body.message).toBe('User created successfully');
            });
        });
     });

     describe(" DELETE /users/:id req", function () {
      beforeEach(async () => {
        await db('users').truncate(); // empty the table and reset the id back to 1
      });
  
      it("return 204 on successful remove", function () {
        return request(server)
          .del("/api/users/1")
          .then(res => {
            expect(res.status).toBe(204);
          });
      });
    });
});

const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    add,
    remove
}

function find() {
    return db('users');
}

function findById(id) {
    return db('users')
        .where({ id })
        .first();
}

function add(user) {
    return db('users')
        .insert(user);
}

function remove(id) {
    return db('users')
    .where('id', id)
    .del();
}
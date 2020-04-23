
exports.up = function(knex) {
    return knex.schema
    .createTable('users', tbl => {
        tbl.increments()
        tbl.string('first_name', 20).notNullable()
        tbl.string('last_name', 20).notNullable()
    });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')  
};

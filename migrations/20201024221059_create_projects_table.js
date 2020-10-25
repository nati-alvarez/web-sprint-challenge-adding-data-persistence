exports.up = function(knex) {
    return knex.schema.createTable("Project", table=>{
        table.increments();
        table.string("name").notNullable();
        table.text("description");
        table.boolean("completed").notNullable().defaultTo(false);
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Project");
};

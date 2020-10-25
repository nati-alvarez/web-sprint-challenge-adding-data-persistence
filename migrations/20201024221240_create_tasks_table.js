exports.up = function(knex) {
    return knex.schema.createTable("Task", table=>{
        table.increments();
        table.text("description").notNullable();
        table.text("notes");
        table.boolean("completed").notNullable().defaultTo(false);
        table.integer("project_id").references("id").inTable("Project").onDelete("CASCADE").onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Task");
};

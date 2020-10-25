exports.up = function(knex) {
    return knex.schema.createTable("Project_Resource", table=>{
        table.increments();
        table.integer("project_id").references("id").inTable("Project").onDelete("CASCADE").onUpdate("CASCADE");
        table.integer("resource_id").references("id").inTable("Resource").onDelete("CASCADE").onUpdate("CASCADE");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("Project_Resource");
};

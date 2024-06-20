import { defineDb, defineTable, column } from 'astro:db';

const Email = defineTable({
  columns: {
    email: column.text()
    }
  }
)

// https://astro.build/db/config
export default defineDb({
  tables: { Email }
});

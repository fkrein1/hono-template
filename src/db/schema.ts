// src/schema.ts
import { sql } from "drizzle-orm/sql";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const todos = sqliteTable("todos", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  text: text("text").notNull(),
  completed: integer("completed", { mode: "boolean" }).default(false),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(CURRENT_TIMESTAMP)`),
});

export type Todo = typeof todos.$inferSelect;
export type NewTodo = typeof todos.$inferInsert;
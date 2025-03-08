CREATE TABLE `todos` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`text` text NOT NULL,
	`completed` integer DEFAULT false,
	`created_at` integer DEFAULT (CURRENT_TIMESTAMP),
	`updated_at` integer DEFAULT (CURRENT_TIMESTAMP)
);

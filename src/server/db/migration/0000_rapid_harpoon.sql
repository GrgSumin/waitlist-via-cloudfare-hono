CREATE TABLE `subscribers` (
	`id` integer PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`created_at` integer DEFAULT '"2026-09-16T21:31:14.238Z"' NOT NULL,
	`updated_at` integer DEFAULT '"2026-09-16T21:31:14.242Z"' NOT NULL,
	`traffic_source` text,
	`device` text,
	`email_Verified` integer,
	`unsubscribed` integer,
	`confirmation_token` text,
	CONSTRAINT "email" CHECK("subscribers"."email" LIKE '%@%.%')
);
--> statement-breakpoint
CREATE UNIQUE INDEX `subscribers_email_unique` ON `subscribers` (`email`);
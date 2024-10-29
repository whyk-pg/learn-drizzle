CREATE TABLE `movies` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`title` varchar(246) NOT NULL,
	`is_dubbed` boolean NOT NULL,
	`is_domestic` boolean NOT NULL,
	`is_live_action` boolean NOT NULL,
	`theater_id` int NOT NULL,
	`view_start_datetime` datetime NOT NULL,
	`view_end_datetime` datetime NOT NULL,
	`accompanier` int,
	`rating` int,
	`comment` text,
	CONSTRAINT `movies_id` PRIMARY KEY(`id`),
	CONSTRAINT `movies_id_unique` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE TABLE `theaters` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(246) NOT NULL,
	CONSTRAINT `theaters_id` PRIMARY KEY(`id`),
	CONSTRAINT `theaters_id_unique` UNIQUE(`id`),
	CONSTRAINT `theaters_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
DROP TABLE `tbl_movieinfo`;--> statement-breakpoint
DROP TABLE `tbl_theater`;--> statement-breakpoint
ALTER TABLE `movies` ADD CONSTRAINT `movies_theater_id_theaters_id_fk` FOREIGN KEY (`theater_id`) REFERENCES `theaters`(`id`) ON DELETE no action ON UPDATE no action;
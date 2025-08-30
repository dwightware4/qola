CREATE TYPE "public"."profile_status" AS ENUM('new', 'researching', 'ready');--> statement-breakpoint
CREATE TABLE "companies" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"name" text NOT NULL,
	"website_url" text NOT NULL,
	"profile_status" "profile_status" DEFAULT 'new' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "companies_user_id_unique" UNIQUE("user_id"),
	CONSTRAINT "companies_website_url_unique" UNIQUE("website_url")
);

CREATE TYPE "order_status" AS ENUM (
  'cart',
  'ordered'
);

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "uuid" varchar(40) UNIQUE NOT NULL,
  "full_name" varchar(50),
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "products" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(50),
  "price" numeric(5,2),
  "description" text,
  "image" varchar(200),
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int NOT NULL,
  "status" order_status NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "order_items" (
  "order_id" int,
  "product_id" int,
  "quantity" int DEFAULT 1
);

ALTER TABLE "order_items" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "order_items" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");

CREATE INDEX "product_name" ON "products" ("name");

CREATE UNIQUE INDEX ON "products" ("id");

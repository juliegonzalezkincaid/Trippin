
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
-- CREATE TABLE "user" (  
-- "id" INTEGER PRIMARY KEY,
-- "user_name"VARCHAR,
-- "password" VARCHAR
-- ); 
--"user": person who creates an accont on the website, like a profile for each person
-- "id": each user has a unique number assigned to them and a "password"



CREATE TABLE "trip" (
"id" INTEGER PRIMARY KEY,
"user_id" INTEGER,
"description" VARCHAR,
"start_date" DATE,
"end_date" DATE
);
-- "trip": specific vacation that user takes. each trip has :
--"id": unique number
--"user_id": the id of the user who took the trip
--"description": explanation of the trip
-- "start_date" and "end_date"


CREATE TABLE "category" (
"id" INTEGER PRIMARY KEY,
"type" VARCHAR
);
-- "category": way to group entries based on their type. Each category has:
-- "id": unique number
-- "type": NAME for the category EX: flightinfo
-- categories help organize entries so that users can easily find or filter entries based on specific topics or interests


-- "category": way to group entries based on their type. Each category has:
-- "id": unique number
-- "type": NAME for the category EX: flightinfo
-- categories help organize entries so that users can easily find or filter entries based on specific topics or interests

CREATE TABLE "entry" (
    "id" INTEGER PRIMARY KEY,
    "user_id" INTEGER,
    "trip_id" INTEGER,
    "category_id" INTEGER,
    "entry_text" VARCHAR,
    "created_at" TIMESTAMP,
    CONSTRAINT "entry_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user" ("id"),
    CONSTRAINT "entry_trip_id_fk" FOREIGN KEY ("trip_id") REFERENCES "trip" ("id"),
    CONSTRAINT "entry_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "category" ("id")
);



INSERT INTO "category" ("id", "type")
VALUES 
    (1, 'Guest_Info'),
    (2, 'Flight_Info'),
    (3, 'Lodging'),
    (4, 'Suitcase'),
    (5, 'Q_&_A_Misc');

INSERT INTO "user_trip_entry" ("id", "user_id", "trip_id", "entry_id", "category_id")
VALUES (1, 1, 2, 3, 4);


CREATE TABLE "user_trip_entry" (
  "id" integer PRIMARY KEY,
  "user_id" integer,
  "trip_id" integer,
  "entry_id" integer,
  "category_id" integer,
  CONSTRAINT "user_trip_entry_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user" ("id"),
  CONSTRAINT "user_trip_entry_trip_id_fk" FOREIGN KEY ("trip_id") REFERENCES "trip" ("id"),
  CONSTRAINT "user_trip_entry_entry_id_fk" FOREIGN KEY ("entry_id") REFERENCES "entry" ("id"),
  CONSTRAINT "user_trip_entry_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "category" ("id")
);
CREATE TABLE "entry" (
    "id" INTEGER PRIMARY KEY,
    "user_id" INTEGER,
    "trip_id" INTEGER,
    "category_id" INTEGER,
    "entry_text" VARCHAR,
    "created_at" TIMESTAMP,
    CONSTRAINT "entry_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user" ("id"),
    CONSTRAINT "entry_trip_id_fk" FOREIGN KEY ("trip_id") REFERENCES "trip" ("id"),
    CONSTRAINT "entry_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "category" ("id")
);

INSERT INTO "user" ("id", "username", "password")
VALUES (1, 'julie', 'password123');
INSERT INTO "user_trip_entry" ("id", "user_id", "trip_id", "entry_id", "category_id")
VALUES (1, 1, 2, 1, 4);
ALTER TABLE "user" ALTER COLUMN "id" SET DEFAULT nextval('"user_id_seq"');
CREATE SEQUENCE "user_id_seq" OWNED BY "user"."id";





CREATE SEQUENCE "entry_id_seq" OWNED BY "entry"."id";

ALTER TABLE "entry" ALTER COLUMN "id" SET DEFAULT nextval('"entry_id_seq"');

-- Port 5432
-- barrel db name: weekend-to-do
-- `weekend-to-do-app` create first

CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR(255),
	task_is_completed BOOLEAN DEFAULT FALSE)
INSERT INTO "tasks" 
	( "task") 
VALUES 
	( 'Laundry'), 
	('Grocery Delivery'), 
	( 'Meal Planning'), 
	( 'Start Taxes'), 
	('Clean');
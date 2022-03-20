-- Port 5432
-- barrel db name: weekend-to-do
-- `weekend-to-do-app` create first

CREATE TABLE "task" (
	"id" SERIAL PRIMARY KEY,
	"complete_date" VARCHAR(10),
	"task" VARCHAR(255),
	"task_is_completed" BOOLEAN DEFAULT FALSE
	);
	
INSERT INTO "taskList" 
	("complete_date", "task") 
VALUES 
	('2022-03-20', 'Laundry'), 
	('2022-03-21', 'Grocery Delivery'), 
	('2022-03-22', 'Meal Planning'), 
	('2022-03-23', 'Start Taxes'), 
	('2022-03-24', 'Clean');
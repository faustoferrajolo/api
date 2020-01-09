Se ejecuta con npm start
Endpoints:

Get all users - GET: 127.0.0.1:3002/users/
Get one specific user - GET: 127.0.0.1:3002/users/1
Create new user - POST: 127.0.0.1:3002/users/ 
	(Body - x-www-form.urlencoded)
	name:Name LastName
	email:mail@mail.com
Update specific user - PUT: 127.0.0.1:3002/users/1?name=NewName&email=mail@mail.com
	(Body - x-www-form.urlencoded)
	name:NewName
	email:mail@mail.com
Delete specific user - DELETE: 127.0.0.1:3002/users/1

# Content-Service

<br/>

#### API documentation : https://bit.ly/content-service-g17

This is a Node Express Mongo application which is made along with User-Service and User-Interaction-Service.

### To start the service 

Locate the service in the terminal.

If not already created , create a bridge network to connect docker containers of all the services .

`docker network create bridge-network`

After the bridge network has been created , use the command below to run the service , make sure 

`docker-compose up --build -d`

This service contains two containers - 

**1) content :** Node Express Backend to make CRUD operations on Content. A list of all APIs can be found here https://bit.ly/content-service-g17 .Service makes use of port 3000 which has to be free.


**2) mongocontent :** A mongo database to store contents. Schema of the database can be found here https://github.com/Yash-g17/Content-Service/blob/main/models/content.model.js . Service makes use of port 27017 which is an internal port.


### To stop the service gracefully

Simply go to the terminal where you started the service and run

`docker-compose down`
<br/>
<br/>
<br/>
<br/>
<br/>




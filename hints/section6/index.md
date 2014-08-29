#section 6

## Testing a REST Service with IntelliJ

Open the Tool
![title](1.png) 

Enter the path to your server and service you want to test
![title](2.png) 

Hit play, see the response
![title](3.png)

## Trying to add a new user? Try it like this:

1. Open the DB and add a networkNode into the DB
![title](5.png)
2. Add a user using the REST API. For the personal device, add the details you just entered in the DB and add the user as shown in the picture below
 ![title](4.png)
You need to use the POST http method. You need to specify the content type as json so the server knows what to expect. You also need to send the user you want to add as the body of the request (the json in the upper window).
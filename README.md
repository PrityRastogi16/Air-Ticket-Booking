# Air-Ticket-Booking

**API End Points:**
# /user/register -
    This endpoint is used to register a new user. Upon successful registration, it returns a JSON response with a status code of 201.
Request Body
name (string, required): The name of the user.
email (string, required): The email address of the user.
password (string, required): The password for the user account.

Response
Status: 201
Content-Type: application/json
msg (string): A message indicating the result of the registration.
user (object): An object containing the details of the registered user, including their name, email, password, unique ID, and version.


# /user/login 
This endpoint allows users to log in via HTTP POST request. Users need to provide their email and password in the request body to authenticate.
Request Body
email (text, required): The email of the user.
password (text, required): The password of the user.

Response
Upon a successful login, the server responds with a status code of 201 and a JSON object containing a message, user details, and a token for authentication.
EXAMPLE:
{
    "msg": "Login successful",
    "user": {
        "_id": "user_id",
        "name": "user_name",
        "email": "user_email",
        "password": "user_password",
        "__v": 0
    },
    "token": "authentication_token"
}
 
 # /flight/add - to add flights 
 Add Flight
This endpoint allows you to add a new flight.
Request Body
airline (string): The name of the airline.
flightNo (string): The flight number.
departure (string): The departure location.
arrival (string): The arrival location.
seats (number): The total number of seats available on the flight.
price (number): The price of the flight.

Response
Status: 201
Content-Type: application/json
msg (string): A message related to the request.
flight (object): Details of the added flight, including the airline, flight number, departure, arrival, seats, price, _id, and __v.


  
# /flight/
This HTTP GET request retrieves a list of flights from the server. The request does not require any parameters to be passed in the URL. The request body is of type raw, and it should contain a JSON object with keys "airline", "flightNo", "departure", "arrival", "seats", and "price". The values for these keys can be used to filter the list of flights.
Request Body
airline (string): The name of the airline.
flightNo (string): The flight number.
departure (string): The departure location.
arrival (string): The arrival location.
seats (number): The number of available seats.
price (number): The price of the flight.

Response
Upon a successful execution, the server responds with a status code of 201 and the content type is "application/json". The response body contains an array of flight objects, each with keys "_id", "airline", "flightNo", "departure", "arrival", "seats", "price", and "__v". These keys provide information about the flights retrieved from the server.
 
    
 # /flight/:id
This HTTP GET request retrieves a list of flights from the server based on id given in URL. The request body is of type raw, and it should contain a JSON object with keys "airline", "flightNo", "departure", "arrival", "seats", and "price". The values for these keys can be used to filter the list of flights.
Request Body
airline (string): The name of the airline.
flightNo (string): The flight number.
departure (string): The departure location.
arrival (string): The arrival location.
seats (number): The number of available seats.
price (number): The price of the flight.

  
# /flight/delete/:id
This endpoint sends an HTTP DELETE request to delete a specific flight.
Request Body
The request body should be sent in raw format and include the following parameters:
airline (string): The airline of the flight.
flightNo (string): The flight number.
departure (string): The departure location.
arrival (string): The arrival location.
seats (number): The number of seats.
price (number): The price of the flight.



# /booking/
Add Booking
This API endpoint is used to add a new booking for a flight.
Request Body
flightId (string, required): The unique identifier of the flight for which the booking is being made.

Response
Status: 201
Content-Type: application/json
msg (string): A message indicating the status of the booking process.


# /booking/dashboard 
This endpoint makes an HTTP GET request to retrieve the booking dashboard details.
Request Parameters
flightId (string, required): The ID of the flight for which the dashboard details are to be retrieved.


# /booking/dashboard/:id
This endpoint makes an HTTP GET request to update booking dashboard details.
Request Parameters

# /booking/dashboard/id:
This endpoint makes an HTTP GET request to delete booking dashboard details.
Request Parameters

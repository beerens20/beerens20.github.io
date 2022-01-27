Application Programming Interface (API)  
> A set of commands, functions, protocols, and objects that\
> programmers can use to create software or interact with an external system

Like going into a restaurant as a patron.  The API is the menu that lets you know what you can order from the kitchen

API Endpoint = the location of where the data you want is stored\
Typically a url api.coinbase.com

#### API Options
- Get -- requests.get() : We submit a request for information which gets returned to us
- Post -- requests.post() : We submit information which the external service keeps
- Put -- requests.put() : We submit data to update existing data in the external service
- Delete -- requests.delete() : We want to delete data in external service

API Request = going to the bank and trying to withdraw some money\
* Secured information request - API is the teller that is going to check your credentials, verifying your account number, verifying you have funds
* Unsecured information request - Asking general questions like when do you open

---

## Working with API in Python

### Handling responses
import requests - python package for working with api's
```python
import requests

response = requests.get(url="target api url")  # sends a request for info to url and stores it in a variable
print(response)  # returns [200] which is the response code but NOT the JSON
print(response.status_code)  # returns just the status code
```
```python
import requests
# Returning messages for status codes
response = requests.get(url="target api url")
response.raise_for_status()
```

Response codes have very specific meanings\
1XX : Hold on\
2XX : Here you go!\
3XX : Go Away\
4XX : You screwed up\
5XX : I (server) screwed up

### Unpacking JSON from repsponse
```python
import requests
response = requests.get(url="target api url")
response.raise_for_status()

data = response.json()  # returns JSON data into a variable for use
longitude = data["iss_position"]["longitude"]
latitude = data["iss_position"]["latitude"]
iss_position = (longitude, latitude)
print(iss_position)
```

### API Parameters
 -- See Day-33 in 100_python project for example code
 
To see json return in browser
https://api.sunrise-sunset.org/json?lat=51.507351&lng=-4.4203400
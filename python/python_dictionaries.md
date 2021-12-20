#### Accessing keys and values in a dictionary
Assuming we have a dictionary with the following data
```
{
    "google":{
        "email": "beerens20@gmail.com",
        "password": "test1234",
    },    
    "amazon":{
        "email": "beerens20@gmail.com",
        "password": "qwer1234",
    }
}
```

###### Method 1 if dict is in same file
```
data = #dictionary listed above
intended_selection = #what you are wanting to find and reference in dict

if intended_selection in data:
    email = data[intended_selection]['email']
    password = data[intended_selection]['password']
    print(f"Your email is {email} and your password is {password}"
```

###### Method 2 if dic is in external file
```
# Read the data (either from .txt file or json)
with open("data.json", "r") as data_file:
    data = json.load(data_file)
    
    intended_selection = #What you are wanting to find and reference in dict
    if intended_selection in data:
        email = data[intended_selection]['email']
        password = data[intended_selection]['password']
        print(f"Your email is {email} and your password is {password}"
```

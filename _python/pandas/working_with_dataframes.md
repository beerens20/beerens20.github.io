###### Pulling data into a dataframe
Assign read information to dataframe variable
```python
data = pd.read_csv("file.csv")
```

###### Create dictionary from data using dictionary comprehension
```python
birthdays_dict = {(data_row.month, data_row.day): data_row for (incex, data_row) in data.interrows()}
```

###### Reference dict for values
```python
if today_tuple in birthdays_dict:
    birthday_person = birthdays_dict[today_tuple]  # Creates a data row from birthdays_dict
    file_path = f"letter_templates/letter_{random.randint(1,3)}.txt"
    with open(file_path) as letter_file:
        contents = letter_file.read()
        contents = contents.replace("[NAME", birthday_person["name"])  # grabs the name from the name field of selected birthday_person variable
        

    with smtplib.SMTP("smtp.gmail.com") as connection:
        connection.starttls()
        connection.login(MY_EMAIL, MY_PASSWORD)
        connection.sendmail(
            from_addr=MY_EMAIL,
            to_addrs=birthday_person["email"],
            msg=f"Subject Happy Birthday\n\n{contents}"
        )
```
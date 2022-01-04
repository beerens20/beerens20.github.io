```
import datetime as dt

#Getting current info in datetime object
now = dt.datetime.now()
year = now.year
day = now.day
hour = now.hour
month = now.month
minute = now.minute
print(f"{hour}:{minute} on day {day} and month {month} of {year}.")

#Creating my own datetime object
date_of_birth = dt.datetime(year=1978, month=11, day=13)
print(date_of_birth)
```
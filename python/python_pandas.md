###### Create dataframe from csv
variable = pandas.read_csv("path to file")

---
###### Grab random entry from dictionary
1. change data from cvs to dictionary
```
data = pandas.read_csv("path to file")
data_to_dict = data.to_dict(orient="records")  #Other options here, check docs
random_entry = random.choice(data_to_dict)
```
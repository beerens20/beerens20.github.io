pages for notes about python exceptions

```
    Try
    #This is the code that has the potential to faile
    
    Except
    #This is the code that reacts to the the Try failing
    
    Else
    #This is the code that fires if the Try succeeds
    
    Finally
    #This code fires at the end no matter what
    
    raise
    #This allows us to raise our own exception. Can be used outside of the Try/Except/Else/Finally
```
---
Code Example - expected data doc is not present
```
    try:
      file = open("a_file.txt")
      a_dictionary = {"key": "value"}
      print(a_dictionary["key"])
    except FileNotFoundError:
      file = open("a_file.txt", "w") #If a_file.txt does not exist for the Try statement this line creates it then writes to it
      file.write("Something")
    else:
      content = file.read() #If a_file.txt exists in the Try statement then this ELSE fires reading the file into variable content
      print(content)
    finally:
      raise KeyError("This is an error that I made up")
      #Causes an error to raise regardless
```
---
#### Code Example - function fails to expected value
```
    fruits = ["Apple", "Pear", "Orange"]
    
    def make_pie(index):
        try:
            fruit = fruits[index]
        except IndexError:
            print("Fruit pie")
        else:
            print(fruit + " pie")
```

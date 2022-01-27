###### Generate Canvas
1. Create canvas
2. Config your canvas
3. Set canvas on window object via grid, place, or pack
4. Add content
5. Place content

```
from tkinter import *
canvas = Canvas(wdith=800, height=526, bg="white")  #1 and 2
example_text = canvas.create_text(  # 4 and 5
                                    400, 150,  #Sets position on the canvas x,y
                                    text="Hello World",  #Sets text
                                    font=(  #Formats text
                                        "Ariel",  #Font
                                        40,  #Font size
                                        "bold"  #Font effects
                                        #for mac you need to set fill="black" for words to appear
                                        )
                                  )


canvas.grid(row=0, column=0, columnspan=2)  #3
```

---
#### Notes
- You cannot use grid and place within the same object but you can use grid to postion your canvas and place to place items within that canvas
- Use PhotoImage to add imgs to canvas
    ```
        example_image = PhotoImage(file="path_to_file")  #Gets image as variable
        canvas.create_image(400,263, image=example_image)
    ```
- You can dynamically update text through functions
    ```
        #using example_text from code above
        def new_word():
            new_word = word_to_insert
            canvas.itemconfig(example_text, text=new_word)
    ```
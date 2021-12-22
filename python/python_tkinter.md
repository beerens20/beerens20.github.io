###### Generate GUI
1. Import tkinter
2. Create your window
3. Set mainloop so to get window to pop up and stay open
4. Config your window


```
from tkinter import *  #1

window = Tk()  #2
window.title("Example Title")
window.config(padx=50, pady=50, bg="white")  #4


window.mainloop()  #3
```


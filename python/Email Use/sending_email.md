---
####Test Emails

Google\
dev.beerens20@gmail.com\
Harp2014

Yahoo\
dev.beerens20@yahoo.com\
St@ff depth remark define

---


module that allows us to send email
- smtplib (included in python)

1. Create a connection object including the smtp details for the email provider
2. Include connection security which encrypts the email
3. Add sender info
4. Add email details
```
import smtplib

my_email = "dev.beerens20@gmail.com"
my_password = "Password1234"

(1)with smtplib.SMTP("smtp.gmail.com") as connection:
    (2)connection.startls()
    (3)connection.login(user=my_email, password=my_password)
    (4)connection.sendmail(
        from_addr=my_email,
        to_addr="recipient email",
        msg="Subject:Hello\n\nThis is the body of my email."
    )
```
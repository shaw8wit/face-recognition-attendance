import yagmail
import os
import datetime


def sendMail(receiver):
    path = 'Attendance'
    message = 'No Attendance Recorded Yet!'
    date = datetime.date.today().strftime("%B %d, %Y")
    os.chdir(path)
    files = sorted(os.listdir(os.getcwd()), key=os.path.getmtime)
    if files:
        filename = files[-1]
        sub = "Attendance Report for " + str(date)

        # senders mail information
        yag = yagmail.SMTP(
            "face.recognition.attendance.sys@gmail.com", "TemporaryPassword@15")

        # send the mail
        yag.send(
            to=receiver,
            subject=sub,  # email subject
            contents=f"Attendance for {date}",  # email body
            attachments=filename  # file attached
        )
        message = f"Attendance sent to {receiver}"
    os.chdir('..')
    return message

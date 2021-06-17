# for websockets
import eel

import check_camera
import capture_image
import train_image
import record
import clear_data
import automail

# initialize the backend to be used for the desktop application
eel.init('web')


# exposing only the main menu to the eel library for backend connection
@eel.expose
def mainMenu(choice, args=True):
    '''
    Carries out the assigned function according to user input
    '''
    res = ""
    try:
        if choice == 1:
            # calling the check() function from check_camera.py file
            res = check_camera.check()
        elif choice == 2:
            # calling the takeImages() function from capture_image.py file
            res = capture_image.takeImages(args['id'], args['name'])
        elif choice == 3:
            # calling the trainImages() function from train_image.py file
            res = train_image.trainImages()
        elif choice == 4:
            # calling the recordAttendance() function from record.py file
            res = record.recordAttendence()
        elif choice == 5:
            # calling the sendMail() function from automail.py file
            res = automail.sendMail(args['receiver'])
        elif choice == 6:
            # calling the sendMail() function from automail.py file
            res = clear_data.clearData()
    except Exception as e:
        # if something unexpected happens then print the error and let the caller know
        print(e)
        return "Something went wrong!"
    return res


# denotes the starting point of the desktop app
eel.start('index.html', size=(1000, 900))

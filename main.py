# for websockets
import eel

import check_camera
import capture_image
import train_image
import record
import automail

eel.init('web')


# creating the user main menu function
@eel.expose
def mainMenu(choice, args=True):
    res = ""
    try:
        if choice == 1:
            # calling the camera test function from check camera.py file
            res = check_camera.check()
        elif choice == 2:
            # calling the take image function form capture image.py file
            res = capture_image.takeImages(args['id'], args['name'])
        elif choice == 3:
            # calling the train images from train_images.py file
            res = train_image.trainImages()
        elif choice == 4:
            # calling the recognize_attendance from recognize.py file
            res = record.recordAttendence()
        elif choice == 5:
            res = automail.sendMail(args['receiver'])
    except Exception as e:
        print(e)
        return "Something went wrong!"
    return res


eel.start('index.html', size=(1000, 900))

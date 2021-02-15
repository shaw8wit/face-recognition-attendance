import os  # accessing the os functions
import check_camera
import Capture_Image
import Train_Image
import Recognize


# creating the title bar function
def title_bar():
    os.system('clear')  # for linux
    # os.system('cls') # for windows

    # title of the program
    print("\t**********************************************")
    print("\t***** Face Recognition Attendance System *****")
    print("\t**********************************************")


# creating the user main menu function
def mainMenu():
    while True:
        try:
            title_bar()
            print()
            print(10 * "*", "WELCOME MENU", 10 * "*")
            print("[1] Check Camera")
            print("[2] Capture Faces")
            print("[3] Train Images")
            print("[4] Recognize & Attendance")
            print("[5] Auto Mail")
            print("[6] Quit")
            os.system('espeak "enter choice"')
            choice = int(input("Enter Choice: "))

            if choice == 1:
                # calling the camera test function from check camera.py file
                check_camera.camer()
            elif choice == 2:
                # calling the take image function form capture image.py file
                Capture_Image.takeImages()
            elif choice == 3:
                # calling the train images from train_images.py file
                Train_Image.TrainImages()
            elif choice == 4:
                # calling the recognize_attendance from recognize.py file
                Recognize.recognize_attendence()
            elif choice == 5:
                os.system("python automail.py")
            elif choice == 6:
                print("Thank You")
                break
            else:
                print("Invalid Choice. Enter 1-6")
            input("Press enter to return to the main menu")
        except ValueError:
            print("Invalid Choice. Enter 1-6\tTry Again")
            input("Press enter to return to the main menu")
    exit


# ---------------main driver ------------------
if __name__ == '__main__':
    mainMenu()

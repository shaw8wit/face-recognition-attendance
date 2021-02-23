import csv
import cv2
import os


def takeImages(id, name) -> str:
    '''
    Takes and saves images for user with id = `id` and name = `name`
    '''

    cam = cv2.VideoCapture(0)
    harcascadePath = "haarcascade_frontalface_default.xml"
    detector = cv2.CascadeClassifier(harcascadePath)
    sampleNum = 0

    while(True):
        ret, img = cam.read()
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        faces = detector.detectMultiScale(
            gray, 1.3, 5, minSize=(30, 30), flags=cv2.CASCADE_SCALE_IMAGE)
        for(x, y, w, h) in faces:
            cv2.rectangle(img, (x, y), (x+w, y+h), (10, 159, 255), 2)
            # incrementing sample number
            sampleNum = sampleNum+1
            # saving the captured face in the dataset folder TrainingImage
            cv2.imwrite("TrainingImage" + os.sep + name + "." + id + '.' +
                        str(sampleNum) + ".jpg", gray[y:y+h, x:x+w])
            # display the frame
            cv2.imshow('frame', img)
        # wait for 100 miliseconds
        if cv2.waitKey(100) & 0xFF == ord('q'):
            break
        # break if the sample number is more than 100
        elif sampleNum > 100:
            break
    cam.release()
    cv2.destroyAllWindows()
    res = "Images Saved for ID : " + id + ", Name : " + name
    row = [id, name]
    with open("StudentDetails"+os.sep+"StudentDetails.csv", 'a+') as csvFile:
        writer = csv.writer(csvFile)
        writer.writerow(row)
    csvFile.close()
    return res

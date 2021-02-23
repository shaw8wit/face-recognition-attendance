import os
import cv2
import numpy as np
from PIL import Image
from threading import Thread


def getImagesAndLabels(path):
    '''
    Returns the images with its labels for training the model
    '''

    # get the path of all the files in the folder
    imagePaths = [os.path.join(path, f) for f in os.listdir(path)]
    # print(imagePaths)

    # create empth face list
    faces = []
    # create empty ID list
    Ids = []
    # now looping through all the image paths and loading the Ids and the images
    for imagePath in imagePaths:
        # loading the image and converting it to gray scale
        pilImage = Image.open(imagePath).convert('L')
        # Now we are converting the PIL image into numpy array
        imageNp = np.array(pilImage, 'uint8')
        # getting the Id from the image
        Id = int(os.path.split(imagePath)[-1].split(".")[1])
        # extract the face from the training image sample
        faces.append(imageNp)
        Ids.append(Id)
    return faces, Ids


def trainImages():
    '''
    Trains the recognizer using all images in 'TrainingImage' folder

    Saves the recognizer in the 'TrainingImageLabel' folder
    '''
    recognizer = cv2.face.LBPHFaceRecognizer_create()
    faces, Id = getImagesAndLabels("TrainingImage")
    Thread(target=recognizer.train(faces, np.array(Id))).start()
    recognizer.save("TrainingImageLabel"+os.sep+"Trainner.yml")
    return "Trained Model Using All Images"

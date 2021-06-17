import glob
import os


def clearData():
    directories = ['Attendance', 'StudentDetails', 'TrainingImage']
    result = ''
    for dir in directories:
        os.chdir(dir)
        for filename in glob.glob('*'):
            os.unlink(filename)
        result += dir + ", "
        os.chdir('..')
    return result + "deleted!"

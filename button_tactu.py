from gpiozero import Button
import pygame

count = 0

file = open('visitors.txt', 'r');
count = int(file.read())

button = Button(2)
pygame.mixer.init()
pygame.mixer.music.load("jobshop.wav")



while True:
	button.wait_for_press()
	button.wait_for_release()
	count = count + 1
	print (str(count), "visitors")
	file = open('visitors.txt', 'r+')
	file.write(str(count))
	file.close()
	pygame.mixer.music.play()
	
	
	




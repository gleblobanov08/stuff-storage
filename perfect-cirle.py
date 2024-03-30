import pygame
import sys
import math

pygame.init()

width, height = 800, 600
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Circle Drawing")

black = (0, 0, 0)
white = (255, 255, 255)

center_x, center_y = width // 2, height // 2

radius = 100

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    screen.fill(black)

    pygame.draw.circle(screen, white, (center_x, center_y), radius, 2)

    pygame.display.flip()

pygame.quit()
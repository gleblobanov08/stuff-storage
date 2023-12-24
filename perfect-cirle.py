import pygame
import sys
import math

# Initialize Pygame
pygame.init()

# Set up display
width, height = 800, 600
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Circle Drawing")

# Set up colors
black = (0, 0, 0)
white = (255, 255, 255)

# Set up the center point of the circle
center_x, center_y = width // 2, height // 2

# Set up the radius of the circle
radius = 100

# Main game loop
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    # Clear the screen
    screen.fill(black)

    # Draw the circle
    pygame.draw.circle(screen, white, (center_x, center_y), radius, 2)

    # Update the display
    pygame.display.flip()

# Quit Pygame
pygame.quit()

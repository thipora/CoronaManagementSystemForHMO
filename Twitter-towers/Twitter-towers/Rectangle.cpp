#include "Rectangle.h"

Rectangle::Rectangle(int h, int w)
{
	height = h;
	width = w;
}

int Rectangle::perimeter()
{
	return (height + width) * 2;
}

int Rectangle::area()
{
	return height * width;
}
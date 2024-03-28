#pragma once
#include <iostream>
using namespace std;

class Rectangle
{
private:
    int height;
    int width;
public:
    Rectangle(int h, int w);
    int perimeter();
    int area();
};


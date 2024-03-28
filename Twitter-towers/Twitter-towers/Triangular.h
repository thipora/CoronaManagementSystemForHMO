#pragma once
#include <iostream>
#include <cmath>
using namespace std;

class Triangular
{
private:
    int height;
    int width;
    double side();
public:
    Triangular(int h, int w);
    double perimeter();
    void printTriangle();
};


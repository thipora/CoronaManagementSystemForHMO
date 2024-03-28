#include "Triangular.h"

double Triangular::side()
{
	return sqrt(pow(height, 2) + pow((width / 2), 2));
}

Triangular::Triangular(int h, int w)
{
	height = h;
	width = w;
}

double Triangular::perimeter()
{
	return side()*2 + width;
}

void Triangular::printTriangle()
{
	if (width % 2 == 0 || width > 2 * height) {
		cout << "The triangle cannot be printed" << endl;
		return;
	}

	for (int i = 1; i <= width; i=i+2) {
		int count = (i == 1 || i == width) ? 1 : (i == 3) ? (height - 2) / ((width - 3) / 2) + (height - 2) % ((width - 3) / 2) : (height - 2) / ((width - 3) / 2);
		for (int j = 0; j < count; j++) {
			for (int n = 0; n < (width - i) / 2; n++)
				cout << " ";
			for (int n = 0; n < i; n++)
				cout << "*";
			cout << endl;
		}
	}
}

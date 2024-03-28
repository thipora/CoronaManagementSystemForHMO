#include <iostream>
#include "Rectangle.h"
#include "Triangular.h"

using namespace std;

int main() {
    int choice;
    int height, width;

    do {
        cout << "Choose an option:" << endl;
        cout << "1. Rectangle Tower" << endl;
        cout << "2. Triangle Tower" << endl;
        cout << "3. Exit" << endl;
        cin >> choice;

        switch (choice) {
        case 1: {
            cout << "Enter height and width of the rectangle tower: ";
            cin >> height >> width;
            Rectangle tower(height, width);
            if (width == height || 5 < height - width || 5 < width - height) {
                cout << "The area of ​​the tower is: ";
                cout << tower.area() << endl;
            }
            else {
                cout << "The perimeter of the tower is: ";
                cout << tower.perimeter() << endl;
            }
            break;
        }
        case 2: {
            cout << "Enter height and width of the triangle tower: ";
            cin >> height >> width;
            Triangular tower(height, width);
            cout << "Choose an option:" << endl;
            cout << "1. Calculate perimeter" << endl;
            cout << "2. Print triangle" << endl;
            int option;
            cin >> option;
            if (option == 1) {
                cout << "The perimeter of the tower is: " << tower.perimeter() << endl;
            }
            else if (option == 2) {
                tower.printTriangle();
            }
            else {
                cout << "Invalid option." << endl;
            }
            break;
        }
        case 3:
            cout << "Exiting program" << endl;
            break;
        default:
            cout << "Invalid choice. Please try again." << endl;
        }
    } while (choice != 3);

    return 0;
}
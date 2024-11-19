#include <iostream>
#include <string>
using namespace std;
// Hàm để chèn bít 0 vào chuỗi bít
string Chen_bit(const string &input) {
    string output;
    int count = 0;
    for (char bit : input) {
        output += bit;
        if (bit == '1') {
            count++;
            if (count == 5) {
                output += '0';
                count = 0;
            }
        } else {
            count = 0;
        }
    }
    return output;
}
int main() {
    string input;
    cout << "Nhap chuoi bit: ";
    cin >> input;
    string output = Chen_bit(input);
    cout << "Chuoi bit sau khi chen them bit 0: " << output << endl;
    return 0;
}

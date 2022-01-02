// Time complexity: O(n)
// Space complexity: O(n)

#include <iostream>

using namespace std;

std::string reverseString(std::string str)
{
    std::string reversed;

    for (int i = str.length() - 1; i >= 0; i--)
        reversed += str[i];
    cout << reversed;
    return reversed;
}

int main()
{
    reverseString("orikeren");
}

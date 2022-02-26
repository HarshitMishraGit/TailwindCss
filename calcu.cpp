#include<iostream>
#include<math.h>
using namespace std;

class Calculator
{
    int num1;
    int num2;
    char operate;
    public:
    
    int namingTheVariables(int val1, int val2, char opt){
        num1 = val1;
        num2 = val2;
        operate = opt;
    }

    int getResult(){
        switch(operate){
            case '+':
                cout << num1 + num2;
                break;
            case '-':
                cout << fabs(num1 - num2);
                break;
            case '*':
                cout << num1 * num2;
                break;
            case '/':
                cout << num1 / num2;
                break;

        }
    }
};

class ScientificCalculator:Calculator
{
    public:
    void science(){
        cout << "hi sexy" << endl;
    }
};

int main(){
    Calculator calc;
    ScientificCalculator scalc;
    int a, b;
    char op;
    printf("Enter the expression of the value you want to take: \n");
    cin >> a >> op >> b;
    calc.namingTheVariables(a, b, op);
    calc.getResult();

    scalc.science();

    return 0;
}
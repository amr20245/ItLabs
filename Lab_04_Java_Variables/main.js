public class Main {
    public static void main(String[] args) {
        // Integer Variables
        int intOperandA = 5;
        int intOperandB = 3;
        int intSum, intProduct, intDifference, intQuotient, intModulo;

        intSum = intOperandA + intOperandB;
        intProduct = intOperandA * intOperandB;
        intDifference = intOperandA - intOperandB;
        intQuotient = intOperandA / intOperandB;
        intModulo = intOperandA % intOperandB;

        System.out.println("Integer Operations:");
        System.out.println("The sum of " + intOperandA + " and " + intOperandB + " is " + intSum);
        System.out.println("The product of " + intOperandA + " and " + intOperandB + " is " + intProduct);
        System.out.println("The difference between " + intOperandA + " and " + intOperandB + " is " + intDifference);
        System.out.println("The quotient of " + intOperandA + " divided by " + intOperandB + " is " + intQuotient);
        System.out.println("The modulo of " + intOperandA + " and " + intOperandB + " is " + intModulo);

        // Double Variables
        double doubleOperandA = 5.5;
        double doubleOperandB = 2.2;
        double doubleSum, doubleProduct, doubleDifference, doubleQuotient;

        doubleSum = doubleOperandA + doubleOperandB;
        doubleProduct = doubleOperandA * doubleOperandB;
        doubleDifference = doubleOperandA - doubleOperandB;
        doubleQuotient = doubleOperandA / doubleOperandB;

        System.out.println("\nDouble Operations:");
        System.out.println("The sum of " + doubleOperandA + " and " + doubleOperandB + " is " + doubleSum);
        System.out.println("The product of " + doubleOperandA + " and " + doubleOperandB + " is " + doubleProduct);
        System.out.println("The difference between " + doubleOperandA + " and " + doubleOperandB + " is " + doubleDifference);
        System.out.println("The quotient of " + doubleOperandA + " divided by " + doubleOperandB + " is " + doubleQuotient);
    }
}

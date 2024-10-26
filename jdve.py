import math

def funny_calculator():
    while True:
        print("\nWelcome to the Funny and Useless Calculator!")
        print("Choose an operation:")
        print("1. Add")
        print("2. Subtract")
        print("3. Multiply")
        print("4. Divide")
        print("5. Calculate Pi to the nth digit (uselessly long)")
        print("6. Generate a random insult (because why not?)")
        print("7. Quit")

        choice = int(input("Enter your choice (1-7): "))

        if choice == 1:
            num1 = float(input("Enter the first number: "))
            num2 = float(input("Enter the second number: "))
            result = num1 + num2
            print(f"The sum is: {result}")

        elif choice == 2:
            num1 = float(input("Enter the first number: "))
            num2 = float(input("Enter the second number: "))
            result = num1 - num2
            print(f"The difference is: {result}")

        elif choice == 3:
            num1 = float(input("Enter the first number: "))
            num2 = float(input("Enter the second number: "))
            result = num1 * num2
            print(f"The product is: {result}")

        elif choice == 4:
            num1 = float(input("Enter the first number: "))
            num2 = float(input("Enter the second number: "))
            if num2 == 0:
                print("Error: Cannot divide by zero!")
            else:
                result = num1 / num2
                print(f"The quotient is: {result}")

        elif choice == 5:
            n = int(input("Enter the number of digits for Pi: "))
            pi_digits = str(math.pi)[:n+2]  # Add 2 extra digits for rounding
            print(f"Pi to {n} digits: {pi_digits}")

        elif choice == 6:
            insults = ["You're as useless as a chocolate teapot.",
                       "Your brain is smaller than a peanut.",
                       "I'd argue with you, but I'd be losing."]
            import random
            insult = random.choice(insults)
            print(insult)

        elif choice == 7:
            print("Goodbye!")
            break

        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    funny_calculator()
#!/usr/bin/python3


print(5 + 2 * 3 - 1 + 10 / 5)


#calculate BMI
# weight / (height * height)

result1 = input("Enter your Weight Number: ")
result2 = input("Enter your Height Number: ")

result3 = (float(result2) ** float(result2))

scores = float(result1) / float(result3)

print("your Result is: " +  str(scores) + ".")

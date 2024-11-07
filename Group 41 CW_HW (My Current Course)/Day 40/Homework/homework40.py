#Codewars solutions

# https://www.codewars.com/kata/57ed30dde7728215300005fa

def bumps(road):
    bumps = road.count("n")
    if bumps <= 15:
        return "Woohoo!"
    else:
        return "Car Dead"

# https://www.codewars.com/kata/535474308bb336c9980006f2

def greet(name): 
    return "Hello " + name.capitalize() + "!"

# https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3

def sum_even_numbers(seq):
    sum = 0
    for i in range(len(seq)):
        if seq[i] % 2 == 0:
            sum = sum + seq[i]
    return sum

# https://www.codewars.com/kata/5413759479ba273f8100003d/train/python

def reverse(lst):
    empty_list = list()
    length = 0
    for i in range(len(lst)):
        length = length + 1
        empty_list.append(lst[len(lst) - length])
    return empty_list

# https://www.codewars.com/kata/57d2807295497e652b000139

def averages(arr):
    arr = arr or []
    if len(arr) < 2:
        return []
    result = []
    for i in range(len(arr) - 1):
        avg = (arr[i] + arr[i + 1]) / 2
        result.append(avg)
    return result

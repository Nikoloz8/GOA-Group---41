#Codewars Solutions!

#https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/python

def switch_it_up(number):
    if number == 0:
        return "Zero"
    elif number == 1:
        return "One"
    elif number == 2:
        return "Two"
    elif number == 3:
        return "Three"
    elif number == 4:
        return "Four"
    elif number == 5:
        return "Five"
    elif number == 6:
        return "Six"
    elif number == 7:
        return "Seven"
    elif number == 8:
        return "Eight"
    elif number == 9:
        return "Nine"

#https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/python

def even_numbers(arr,n):
    even_numbers = []
    for i in range(len(arr)):
        if arr[i] % 2 == 0:
            even_numbers.append(arr[i])
    return even_numbers[-n:]



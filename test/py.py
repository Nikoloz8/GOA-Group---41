def two_highest(arg1):
    arg1.sort()  
    if len(arg1) > 2 and arg1[-1] != arg1[-2]:
        return [arg1[-1], arg1[-2]]
    elif len(arg1) > 2 and arg1[-1] == arg1[-2]:
        for num in reversed(arg1):
            if num < arg1[-1]:
                return [arg1[-1], num]
    elif len(arg1) == 1:
        return [arg1[-1]]
    else:
        return arg1[::-1] 

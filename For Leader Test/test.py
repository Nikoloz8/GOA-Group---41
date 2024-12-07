def manual_max(list):
    max_num = list[0]
    for i in range(len(list)):
        if list[i] > max_num:
            max_num = list[i]
    return max_num

print(manual_max([5, 8, 16]))


def manual_min(list):
    min_num = list[0]
    for i in range(len(list)):
        if list[i] < min_num:
            min_num = list[i]
    return min_num
print(manual_min([1, 5, 7]))

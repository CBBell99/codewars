def evil(n):
    binary = bin(n)[2:]
    count = 0
    for num in binary:
        if num == '1':
            count += 1
    if count % 2 == 0:
        return "It's Evil!"
    else:
        return "It's Odious!"


print(evil(1))
print(evil(2))
print(evil(4))
print(evil(7))
print(evil(12))

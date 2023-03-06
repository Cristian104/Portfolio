
def getX(position, list):
     list.sort()
     n = list[position - 1]
     return n


print(getX(5, [1, 3, 2, 2, 4, 6, 7, 8, 9, 10]))

create empty list
```py
new_list = []
new_list = list()
```
append an item in the end of the list
```py
list = []
list.append(el)
# list -> [el]
```
insert an item in the desired location of the list
```py
list = [1,2,3]
list.insert(2,2.5)
# list -> [1,2,2.5,3]
```
delete a desired item object of the list
```py
# using "del"
list = [1,2,3]
del list[2]
# lsit -> [1,3]

# using "pop"
list = [1,2,3]
list.pop(0)
# list -> [2, 3]
list = [1,2,3]
list.pop()
# list -> [2, 3]
# if don't specify the location,
# the last item will be deleted
```
sort items in the list
```py
  list = [4, 2, 3, 1]
  sorted_list = sorted(list)
# sorted_list -> [1, 2, 3, 4]
# list -> [4, 2, 3, 1]
# the original list will not be sorted

# if you want sort the original list
list.sort()
# [1, 2, 3, 4]
# you can not substitute to a variable
```
reverse the items in the list
```py
listA = [4, 2, 3, 1]
listB = list(reversed(listA)) # reversed method return iterator
# listB = [1, 3, 2, 4]
# listA = [4, 2, 3, 1]
# the original list will not be sorted
```
create a list containing desired number of zeros
```py
n = 3
lst = [0] * n
print(lst)
```

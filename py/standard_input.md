- Read a single line input with one string data
```shell
# input
s
```
```py
str=input()

# To remove spaces before and after of the value
str=input().strip()
```

- Read a single line input with one number data
```shell
# input
1
```
```py
# input
# 1
int=int(input())
```

- Read a single line input with multiple values as string
```shell
# input
s t
```
```py
list_s=input().split() # read as list
```

- Read a single line input with multiple values as number
```shell
# input
1 2
```
```py
list_i=list(map(int, input().split())) # read as list
```

- Read multiple line inputs with one string data
```shell
# input
s
t
r
```
```py
# If you know the numbers of line
str_mul=[input() for i in range('<number of line>')]

# If you do not know the numbers of line
import sys
a=[]
for i in sys.stdin:
  a.append(i)
```

- Read multiple line inputs with one number data
```shell
# input
1
2
3
```
```py
# If you know the numbers of linen
str_mul=[int(input()) for i in range('<number of line>')]

# If you do not know the numbers of line
import sys
a=[]
for i in sys.stdin:
  a.append(int(i))
```

- Read multiple line inputs with multiple values as number
```shell
# input
1 3
2 4
3 5
```
```py
# If you know the numbers of linen
xy = [map(int, input().split()) for _ in range('<number of line>')]
x, y = [list(i) for i in zip(*xy)]

# If you do not know the numbers of line

import sys
a=[]
for i in sys.stdin:
  x,y=i.split()
  a.append((int(x),int(y)))

print(a)
```
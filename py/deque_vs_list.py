import collections
import time

n = 100000

# LIST
start_time = time.time()
l = []
for i in range(n):
    l.insert(0, i)
print("List: --- %s seconds ---" % (time.time() - start_time))

# DEQUE
start_time = time.time()
d = collections.deque()
for i in range(n):
    d.appendleft(i)
print("Deque: --- %s seconds ---" % (time.time() - start_time))
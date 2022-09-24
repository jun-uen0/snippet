# Best solution
# x=7, n=13
# Count: 4
def power(x,k,cnt):
  cnt+=1
  print(cnt)
  if k == 1:
    return x
  m = k//2
  t = power(x,m,cnt)
  if k % 2 == 0:
    return t * t
  else:
    return t * t * x

# print(power(7,13,0))


# Other solution
# x=7, n=13
# Count: 7
def power2(x,n,cnt):
  cnt+=1
  print(cnt)
  if n == 0:
    return 1
  elif n % 2 == 0:
    return power2(x,n//2,cnt) ** 2
  else:
    return x * power2(x,n-1,cnt)

# print(power2(7,13,0))
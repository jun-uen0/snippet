def binary_search_itr(lst, target):
  start = 0
  end = len(lst) - 1

  while start <= end:
    mid = (start + end) // 2
    if lst[mid] == target:
      return mid
    if lst[mid] > target:
      end = mid - 1
    else:
      start = mid + 1
  return None

def binary_search_rcr(lst, target, start, end):

	while start <= end:
		mid = (end + start) // 2
		if lst[mid] == target:
			return mid
		elif lst[mid] > target:
			end = mid - 1
			return binary_search_rcr(lst, target, start, end)
		else:
			start = mid + 1
			return binary_search_rcr(lst, target, start, end)
	return None

my_list = [1, 3, 5, 7, 9]

# Iterative
print(binary_search_itr(my_list, 3))  # 1
print(binary_search_itr(my_list, -1)) # None

# Recursive
print(binary_search_rcr(my_list, 9, 0, len(my_list)-1)) # 4
print(binary_search_rcr(my_list, 10, 0, len(my_list)-1)) # None

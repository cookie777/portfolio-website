---
title: |
  How to implement binary search and insertion.
date: "2021-08-08"
dbId: 61888383e0e1844eff991564
description: This post explains how to implement binary search in a very simple way. In addition to binary search, it also introduces how to implement binary insertion (both considering left insertion, right insertion). This article is a study note so it might have incomplete info.
image: https://raw.githubusercontent.com/cookie777/images/main/blogs/2021-08-binary-search-insertion/thumbnail.png
keywords: Algorithm, Binary Search, Binary insertion, python, bisect
---

## Usage & Background

Binary search is so powerful for its simpleness. We can make it O(n) to **O(log n)** compare to linear search. Unfortunately, we rarely use Binary search at leetcode or coding interviews.

![Binary search](https://raw.githubusercontent.com/cookie777/images/main/blogs/2021-08-binary-search-insertion/binary-search.svg)
(Cited from wikimedia)

However, as for Binary insertion(where we don't look if there are any targets in the source, but we look where to **insert** the target), we frequently use and this will be a very powerful tool.

There is a lot of questions for coding interviews which we can't solve by O(n\*\*2). In these cases, if are using a linear way to find something, we can replace it with binary insertion. Thus, we can make the time complexity **O(n\*long n)** which will be able to pass.

Actually, we can use the built-in function which is so easy to use. However, to understand deeply, and just in case to be asked to implement, I note my codes.

## Binary search

### Prerequisites

- The source must be ordered.
- Duplicated is allowed. eg [1,2,2,2,3]
- Return `True` if there is a target in the source, otherwise, return `False`.

Here is the code.

```python

def binarySearch(source, target):

    lo = 0
    hi = len(source)

    while lo < hi:
        mid = (lo + hi) // 2

        if source[mid] == target:
            return True

        if source[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1

    return False

```

### Complexity

- Time: O(log n)
- Space: O(1)Prerequisites

### Tips

- We always try to find the middle spot.
- If it's the target, return True.
- If the middle is smaller than the target, this means "low" is too small, so make the `lo` larger than mid. (`mid+1`)
- If the middle is larger than the target, this means `hi` is too large, so make the `hi` small than mid. (`mid-1`)

## Binary Insertion (Left)

### Prerequisites

- The source is the same as binary search
- Return the **index where to insert** the target to keep order.
  - eg, source [1,3], target 0 -> insert index 0
  - eg, source [1,3], target 2 -> insert index 1
  - eg, source [1,3], target 4 -> insert index 2
- If there are duplicates, insert to **the smallest index**.
  - eg, source [1,"here!" 2,2,2,2,2,3], target 2 -> insert index **1**

Here is the code.

```python

def binaryInsertionLeft(source, target):

    lo = 0
    hi = len(source)

    while lo < hi:
        mid = (lo + hi) // 2

        if source[mid] < target:
            lo = mid + 1
        else:
            hi = mid

    return lo

```

### Tips

- The basic concept is the same as binary search.
- However this time, we merge `source[mid] == target` and `source[mid] ＞ target`
  - This is because of the duplicate.
  - Even we find the target, what we care about is the **smallest index** that the target exits.
- We also update hi with `hi = mid`, not `hi = mid-1` and return `lo`

## Binary Insertion (Right)

### Prerequisites

- Most of the thing is same as Binary Insertion (left)
- However, if there are duplicates, insert to **after the largest index**.
  - eg, source [1,2,2,2,2,2,"here!" 3], target 2 -> insert index **6**

Here is the code.

```python

def binaryInsertionRight(source, target):

    lo = 0
    hi = len(source)

    while lo < hi:
        mid = (lo + hi) // 2

        if source[mid] <= target:
            lo = mid + 1
        else:
            hi = mid

    return lo

```

### Tips

- The basic concept is the same as binary insertion (left).
- However this time, we merge `source[mid] == target` and `source[mid] ＜ target`
  - This is because of the duplicate.
  - Even we find the target, what we care about is the **largest index** that the target exits.

## Built-in solution

We can use the built-in function, which is very easy to use. As for python, we can use `bisect` modules. Here is the [internal implementation](https://github.com/python/cpython/blob/main/Lib/bisect.py).

How to use is as follow,

```python
import bisect # for leetcode, we don't even need this

source = [1,2,2,2,2,2,2,2,3]
target = 2

print(bisect.bisect_left(source, target)) #1
print(bisect.bisect_right(source, target)) #9

```

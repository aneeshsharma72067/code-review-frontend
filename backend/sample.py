cached_result_optimization = {
    sample_1:"""import sqlite3
import bcrypt

def create_connection():
    return sqlite3.connect('users.db')

def insecure_login(username, password):
    conn = create_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT password FROM users WHERE username = ?", (username,))
    stored_password = cursor.fetchone()
    if stored_password and bcrypt.checkpw(password.encode('utf-8'), stored_password[0]):
        print("Login successful!")
    else:
        print("Login failed!")
    conn.close()

def store_password():
    username = input("Username: ")
    password = input("Password: ")
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    conn = create_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, hashed_password))
    conn.commit()
    conn.close()

insecure_login("admin", "admin123")
store_password()
""",
    sample_2:"""def fibonacci(n, memo={}):
    '''
    Calculate nth Fibonacci number using memoization
    Args:
        n: integer position in Fibonacci sequence
        memo: dictionary to store computed results
    Returns:
        The nth Fibonacci number
    '''
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)
    return memo[n]
""",
    sample_3:"""def bubble_sort(arr):
    '''
    Sorts an array using bubble sort algorithm
    Args:
        arr: list of elements to be sorted
    Returns:
        Sorted list in ascending order
    '''
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr
"""
}
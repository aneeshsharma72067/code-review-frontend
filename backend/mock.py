"""import sqlite3

def insecure_login(username, password):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute(f"SELECT * FROM users WHERE username = '{username}' AND password = '{password}'")  # SQL Injection
    if cursor.fetchone():
        print("Login successful!")
    else:
        print("Login failed!")
    conn.close()

def store_password():
    username = input("Username: ")
    password = input("Password: ")
    with open("passwords.txt", "a") as f:  # Storing password in plain text
        f.write(f"{username}:{password}\n")

# Example usage
insecure_login("admin", "admin123")
store_password()
"""

"""def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)"""
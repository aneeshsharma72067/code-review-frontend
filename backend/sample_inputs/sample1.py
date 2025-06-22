import sqlite3

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

insecure_login("admin", "admin123")
store_password()

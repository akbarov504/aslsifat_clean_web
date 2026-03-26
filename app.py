from flask import Flask, render_template

app = Flask(__name__)

# MAIN PAGE (UZ + RU toggle bor)
@app.route("/", methods=["GET"])
def home_page():
    return render_template("index.html")


# ONLY UZ PAGE
@app.route("/uz", methods=["GET"])
def uz_page():
    return render_template("index_uz.html")


# ONLY RU PAGE
@app.route("/ru", methods=["GET"])
def ru_page():
    return render_template("index_ru.html")

if __name__ == "__main__":
    app.run(debug=True, port=80)
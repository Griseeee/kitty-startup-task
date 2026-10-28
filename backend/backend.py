from flask import Flask

app = Flask(__name__)

CAT_URL = "https://http.cat/200.jpg"

@app.route("/cat_get")
def hello_world():
    return CAT_URL

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001)

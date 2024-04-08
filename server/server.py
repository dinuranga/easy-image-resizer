from flask import Flask

app = Flask(__name__)

@app.route("/resizeImage")
def get():
    return {"message":"Easy Image Resizer!"}


if __name__ == "__main__":
    app.run(debug = True)
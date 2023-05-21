from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
import os

client = MongoClient(os.environ.get("MONGO_DB_PATH"))
db = client.mydb

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


@app.route("/book_comment", methods=["POST"])
def book_comment_post():
    comment_receive = request.get_json()
    db.book_comment.insert_one(comment_receive)
    return jsonify({'msg': 'POST 연결 완료!'})


@app.route("/book_comment", methods=["GET"])
def book_comment_get():
    comments = list(db.book_comment.find({}, {'_id': False}))
    return jsonify({'comments': comments})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)

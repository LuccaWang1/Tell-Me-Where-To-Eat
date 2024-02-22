"""Server for Tell Me Where To Eat web app."""

import os
from flask import Flask, render_template, request, flash, session, redirect, jsonify, url_for

app = Flask(__name__)

@app.route("/homepage")
def render_homepage():
    
    return render_template("homepage.html")

@app.route("/handle-choose-one")
def choose_one():


if __name__ == "__main__":    
    connect_to_db(app) #postgresql:///eateries

    app.run(host="0.0.0.0", debug=True)
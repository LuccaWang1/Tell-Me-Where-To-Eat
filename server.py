"""Server for Tell Me Where To Eat web app."""

import os
from flask import Flask, render_template, request, flash, session, redirect, jsonify, url_for

app = Flask(__name__)



if __name__ == "__main__":    
    connect_to_db(app) #postgresql:///eateries

    app.run(host="0.0.0.0", debug=True)
"""Server for Tell Me Where To Eat web app."""

from flask import Flask, render_template, request, jsonify
import random
import os

from eatery_datasets import eateries

app = Flask(__name__)

#secret key is needed to use Flask session features
app.secret_key = os.environ["KEY"]

@app.route("/")
def homepage():
    """Render the homepage."""
    
    return render_template("homepage.html")

@app.route("/handle-choose-one", methods=["POST"])
def handle_choose_one():
    """Chose an eatery for the user."""

    eatery = request.json.get("eatery")

    if eatery == "":
        all = eateries["american"] + eateries["asian"] + eateries["breakfast"] + eateries["desert"] + eateries["fast_food"] + eateries["italian"] + eateries["mexican"]

        eatery = random.choice(all)
        
        return jsonify({"eatery": eatery})

    elif eatery == "american":
        eatery = random.choice(eateries["american"])
        return jsonify({"eatery": eatery})

    elif eatery == "asian": 
        eatery = random.choice(eateries["asian"])
        return jsonify({"eatery": eatery})

    elif eatery == "breakfast": 
        eatery = random.choice(eateries["breakfast"])
        return jsonify({"eatery": eatery})

    elif eatery == "desert": 
        eatery = random.choice(eateries["desert"])
        return jsonify({"eatery": eatery})

    elif eatery == "fast_food":
        eatery = random.choice(eateries["fast_food"])
        return jsonify({"eatery": eatery})
    
    elif eatery == "ghost":
        eatery = random.choice(eateries["ghost"])
        return jsonify({"eatery": eatery})
        
    elif eatery == "italian": 
        eatery = random.choice(eateries["italian"])
        return jsonify({"eatery": eatery})

    elif eatery == "mexican":
        eatery = random.choice(eateries["mexican"])
        return jsonify({"eatery": eatery})
        
    else:
        return jsonify({"error": "Invalid eatery option"}), 400

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
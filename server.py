"""Server for Tell Me Where To Eat web app."""

from flask import Flask, render_template, request, jsonify
import random
from eatery_datasets import eateries

app = Flask(__name__)

@app.route("/")
def homepage():
    """Render the homepage."""
    
    return render_template("homepage.html")

@app.route("handle-choose-one", methods=['POST'])
def handle_choose_one():
    """Chose an eatery for the user."""

    eatery_type = request.json.get("eatery")

    if eatery_type == "":
        eatery = random.choice(eateries[["american"]+["asian"]+["breakfast"]+["desert"]+["fast_food"]+["italian"]+["mexican"]])
        return jsonify({"eatery": eatery})

    else:
        if eatery_type == "american":
            eatery = random.choice(eateries["american"])
            return jsonify({"eatery": eatery})

        if eatery_type == "asian": 
            eatery = random.choice(eateries["asian"])
            return jsonify({"eatery": eatery})

        if eatery_type == "breakfast": 
            eatery = random.choice(eateries["breakfast"])
            return jsonify({"eatery": eatery})

        if eatery_type == "desert": 
            eatery = random.choice(eateries["desert"])
            return jsonify({"eatery": eatery})

        if eatery_type == "fast_food": 
            eatery = random.choice(eateries["fast_food"])
            return jsonify({"eatery": eatery})
            
        if eatery_type == "italian": 
            eatery = random.choice(eateries["italian"])
            return jsonify({"eatery": eatery})

        if eatery_type == "mexican":
            eatery = random.choice(eateries["mexican"])
            return jsonify({"eatery": eatery})
        
    

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
"""Server for Tell Me Where To Eat web app."""

from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def homepage():
    """Render the homepage."""
    
    return render_template("homepage.html")

@app.route("/handle-choose-one")
def handle_choose_one():
    """Chose an eatery for the user."""

    eatery_type = request.form.get("kinds")

    if eatery_type == "asian":
        

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
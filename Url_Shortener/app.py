from flask import Flask, render_template, redirect

app = Flask(__name__)
url_mappings = {}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/s/<short_url>')
def redirect_to_original(short_url):
    if short_url in url_mappings:
        return redirect(url_mappings[short_url])
    else:
        return "URL not found"

if __name__ == '__main__':
    app.run(debug=True)

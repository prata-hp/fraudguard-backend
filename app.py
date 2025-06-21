from flask import Flask
from routes.report import report

app = Flask(__name__)
app.register_blueprint(report)

if __name__ == '__main__':
    app.run(debug=True)

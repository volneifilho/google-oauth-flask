from flask import Flask, redirect, url_for, session
from authlib.integrations.flask_client import OAuth
import os

app = Flask(__name__)

# Chave secreta obtida das variáveis de ambiente
app.secret_key = os.getenv("APP_SECRET_KEY")  # Use um valor padrão apenas no desenvolvimento local

# Configurações do OAuth2
GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET")
GOOGLE_DISCOVERY_URL = os.getenv("GOOGLE_DISCOVERY_URL")

# Registro do OAuth
oauth = OAuth(app)
google = oauth.register(
    name="google",
    client_id=GOOGLE_CLIENT_ID,
    client_secret=GOOGLE_CLIENT_SECRET,
    server_metadata_url=GOOGLE_DISCOVERY_URL,
    client_kwargs={"scope": "openid email profile"},
)

@app.route("/")
def index():
    user = session.get("user")
    if isinstance(user, dict) and 'name' in user:
        return f"Hello, {user['name']}! <a href='/logout'>Logout</a>"
    return "<a href='/login'>Login with Google</a>"

@app.route("/login")
def login():
    return google.authorize_redirect(url_for("callback", _external=True))

@app.route("/callback")
def callback():
    token = google.authorize_access_token()
    user_info = token.get("userinfo")
    if user_info:
        session["user"] = user_info
        print("User info:", user_info)
    else:
        session["user"] = None
    return redirect(url_for("index"))

@app.route("/logout")
def logout():
    session.pop("user", None)
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(debug=True)

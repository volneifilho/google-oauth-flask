# Flask Google OAuth App

This is a Flask project that enables users to authenticate with their Google credentials (Gmail) using OAuth 2.0. The app is designed to run locally and be deployed on **Vercel**.

---

## Features

- Google login using OAuth 2.0.
- Homepage displaying authenticated user information.
- Logout functionality to terminate the user's session.
- Environment variable support for secure configurations.

---

## Requirements

- **Python 3.7 or higher**
- Python dependencies listed in `requirements.txt`
- A **Google Cloud Console** project configured for OAuth 2.0
- A **Vercel** account for deployment

---

## Installation

### 1. Clone the repository
```bash
git clone <REPOSITORY_URL>
cd <REPOSITORY_NAME>
```

### 2. Install dependencies
Create a virtual environment and install the required libraries:
```bash
python -m venv venv
source venv/bin/activate  # For Linux/Mac
venv\Scripts\activate     # For Windows
pip install -r requirements.txt
```

### 3. Set up environment variables
Create a `.env` file in the project directory and add:
```env
APP_SECRET_KEY=your-secure-secret-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_DISCOVERY_URL=https://accounts.google.com/.well-known/openid-configuration
```

### 4. Configure the Google Cloud Console
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or use an existing one.
3. Navigate to **APIs & Services > Credentials** and create a new OAuth 2.0 Client ID.
4. Add the following authorized redirect URIs:
   - `http://127.0.0.1:5000/callback` (local)
   - `https://<your-vercel-domain>/callback` (production)

### 5. Run the app locally
Ensure the environment variables are configured and run:
```bash
flask run
```

Open [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser.

---

## Deployment on Vercel

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Set up environment variables on Vercel
In the **Vercel Dashboard**, go to **Settings > Environment Variables** and add:
- `APP_SECRET_KEY`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GOOGLE_DISCOVERY_URL`

### 4. Deploy the app
Run:
```bash
vercel
```

---

## Project Structure

```plaintext
.
├── app.py                # Main Flask application
├── requirements.txt      # Python dependencies
├── README.md             # Project documentation
├── templates/            # HTML templates
│   ├── base.html         # Base template with navigation
│   ├── index.html        # Homepage
│   └── login.html        # Login page
├── static/               # Static files (CSS, JS, images)
├── .env                  # Environment variables (not versioned)
└── vercel.json           # Vercel configuration
```

---

## Dependencies

- [Flask](https://flask.palletsprojects.com/)
- [Authlib](https://docs.authlib.org/)
- [Requests](https://docs.python-requests.org/)

---

## Common Issues

### Error 500 on Vercel Deployment
- Check Vercel logs for detailed error messages:
  ```bash
  vercel logs <deployment-id> --all
  ```
- Ensure all required environment variables are correctly set in the Vercel dashboard.

### Invalid Token on Login
- Ensure the **Redirect URI** is properly configured in the Google Cloud Console.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- [Google OAuth 2.0 Documentation](https://developers.google.com/identity/protocols/oauth2)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [Authlib Documentation](https://docs.authlib.org/)
```

---

### Highlights of the README:
1. **Purpose:** Clearly explains what the repository does.
2. **Setup Instructions:** Step-by-step guide for local setup and deployment on Vercel.
3. **Structure:** Includes a visual overview of the project files.
4. **Common Issues:** Helps users troubleshoot common problems.
5. **Acknowledgments:** Provides links to useful resources.

Feel free to tweak it according to your preferences! 😊

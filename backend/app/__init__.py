from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os

load_dotenv()

db = SQLAlchemy()

def create_app():
    """Factory function para crear la aplicación Flask"""
    app = Flask(__name__)
    
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'dev-secret-key')
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///app.db')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'jwt-secret-key')
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = int(os.getenv('JWT_ACCESS_TOKEN_EXPIRES', 3600))
    
    db.init_app(app)
    CORS(app, origins=['http://localhost:5173'])
    
    from app.controllers.auth_controller import auth_bp
    from app.controllers.user_controller import user_bp
    from app.controllers.health_controller import health_bp
    
    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(user_bp, url_prefix='/api')
    app.register_blueprint(health_bp, url_prefix='/api')
    
    with app.app_context():
        db.create_all()
        
        from app.models.user import User
        from app.services.auth_service import AuthService
        
        if not User.query.filter_by(username='admin').first():
            auth_service = AuthService()
            admin_user = User(username='admin', password_hash=auth_service.hash_password('admin123'))
            db.session.add(admin_user)
            db.session.commit()
            print("Usuario admin creado: username=admin, password=admin123")
    
    return app

from flask import Blueprint, request, jsonify, current_app
from pydantic import BaseModel, ValidationError
from app.services.auth_service import AuthService

auth_bp = Blueprint('auth', __name__)

class LoginRequest(BaseModel):
    username: str
    password: str

@auth_bp.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        if not data:
            return jsonify({'error': 'Datos JSON requeridos'}), 400
        
        try:
            login_data = LoginRequest(**data)
        except ValidationError as e:
            return jsonify({'error': 'Datos inválidos', 'details': str(e)}), 400
        
        auth_service = AuthService()
        user = auth_service.authenticate_user(login_data.username, login_data.password)
        
        if not user:
            return jsonify({'error': 'Credenciales inválidas'}), 401
        
        token = auth_service.create_access_token(
            user, 
            current_app.config['JWT_SECRET_KEY'], 
            current_app.config['JWT_ACCESS_TOKEN_EXPIRES']
        )
        
        return jsonify({
            'token': token,
            'user': user.to_dict()
        }), 200
        
    except Exception as e:
        return jsonify({'error': 'Error interno del servidor', 'details': str(e)}), 500

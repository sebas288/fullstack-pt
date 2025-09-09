from flask import Blueprint, request, jsonify
from functools import wraps
from app.services.auth_service import AuthService
from app import app

user_bp = Blueprint('user', __name__)

def jwt_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        token = None
        
        auth_header = request.headers.get('Authorization')
        if auth_header:
            try:
                token = auth_header.split(" ")[1]  # Bearer <token>
            except IndexError:
                return jsonify({'error': 'Formato de token inválido'}), 401
        else:
            return jsonify({'error': 'Token de autorización requerido'}), 401
        
        if not token:
            return jsonify({'error': 'Token de autorización requerido'}), 401
        
        auth_service = AuthService()
        user = auth_service.get_user_from_token(token, app.config['JWT_SECRET_KEY'])
        
        if not user:
            return jsonify({'error': 'Token inválido o expirado'}), 401
        
        request.current_user = user
        return f(*args, **kwargs)
    
    return decorated_function

@user_bp.route('/me', methods=['GET'])
@jwt_required
def get_current_user():
    """Endpoint protegido para obtener información del usuario actual"""
    try:
        user = request.current_user
        return jsonify({
            'username': user.username,
            'id': user.id,
            'created_at': user.created_at.isoformat() if user.created_at else None
        }), 200
    except Exception as e:
        return jsonify({'error': 'Error interno del servidor', 'details': str(e)}), 500

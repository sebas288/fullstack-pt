from typing import Optional, Dict, Any
from datetime import datetime, timedelta
import jwt
from passlib.context import CryptContext
from app.models.user import User
from app.repositories.user_repository import UserRepository
from app import db

class AuthService:
    
    def __init__(self):
        self.pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
        self.user_repository = UserRepository()
    
    def hash_password(self, password: str) -> str:
        return self.pwd_context.hash(password)
    
    def verify_password(self, plain_password: str, hashed_password: str) -> bool:
        return self.pwd_context.verify(plain_password, hashed_password)
    
    def authenticate_user(self, username: str, password: str) -> Optional[User]:
        user = self.user_repository.get_by_username(username)
        if not user:
            return None
        if not self.verify_password(password, user.password_hash):
            return None
        return user
    
    def create_access_token(self, user: User, secret_key: str, expires_delta: int) -> str:
        to_encode = {
            "sub": str(user.id),
            "username": user.username,
            "exp": datetime.utcnow() + timedelta(seconds=expires_delta)
        }
        encoded_jwt = jwt.encode(to_encode, secret_key, algorithm="HS256")
        return encoded_jwt
    
    def verify_token(self, token: str, secret_key: str) -> Optional[Dict[str, Any]]:
        try:
            payload = jwt.decode(token, secret_key, algorithms=["HS256"])
            return payload
        except jwt.ExpiredSignatureError:
            return None
        except jwt.JWTError:
            return None
    
    def get_user_from_token(self, token: str, secret_key: str) -> Optional[User]:
        payload = self.verify_token(token, secret_key)
        if not payload:
            return None
        
        user_id = payload.get("sub")
        if not user_id:
            return None
        
        return self.user_repository.get_by_id(int(user_id))

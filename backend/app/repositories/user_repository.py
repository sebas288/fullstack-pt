from typing import Optional, List
from app.models.user import User
from app import db

class UserRepository:
    """Repositorio para operaciones CRUD de usuarios"""
    
    def create(self, user: User) -> User:
        """Crear un nuevo usuario"""
        db.session.add(user)
        db.session.commit()
        return user
    
    def get_by_id(self, user_id: int) -> Optional[User]:
        """Obtener usuario por ID"""
        return User.query.get(user_id)
    
    def get_by_username(self, username: str) -> Optional[User]:
        """Obtener usuario por nombre de usuario"""
        return User.query.filter_by(username=username).first()
    
    def get_all(self) -> List[User]:
        """Obtener todos los usuarios"""
        return User.query.all()
    
    def update(self, user: User) -> User:
        """Actualizar un usuario existente"""
        db.session.add(user)  # Marca el objeto como modificado
        db.session.commit()
        return user
    
    def delete(self, user_id: int) -> bool:
        """Eliminar un usuario por ID"""
        user = self.get_by_id(user_id)
        if user:
            db.session.delete(user)
            db.session.commit()
            return True
        return False
    
    def exists_by_username(self, username: str) -> bool:
        """Verificar si existe un usuario con el nombre de usuario dado"""
        return User.query.filter_by(username=username).first() is not None
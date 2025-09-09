from typing import Optional, List
from app.models.user import User
from app import db

class UserRepository:
    
    def create(self, user: User) -> User:
        db.session.add(user)
        db.session.commit()
        return user
    
    def get_by_id(self, user_id: int) -> Optional[User]:
        return User.query.get(user_id)
    
    def get_by_username(self, username: str) -> Optional[User]:
        return User.query.filter_by(username=username).first()
    
    def get_all(self) -> List[User]:
        return User.query.all()
    
    def update(self, user: User) -> User:
        db.session.commit()
        return user
    
    def delete(self, user_id: int) -> bool:
        user = self.get_by_id(user_id)
        if user:
            db.session.delete(user)
            db.session.commit()
            return True
        return False
    
    def exists_by_username(self, username: str) -> bool:
        return User.query.filter_by(username=username).first() is not None

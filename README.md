# 🔐 FullStack PT - Sistema de Autenticación

Proyecto Full Stack con **Flask (Python + SQLite)** y **React + Tailwind**, que muestra un flujo básico de login con **JWT**.

---

## 🎯 Características
- Login con usuario/contraseña y JWT  
- Hash de contraseñas con bcrypt  
- Arquitectura simple por capas (models, repos, services, controllers)  
- UI con React + Tailwind  
- Rutas protegidas en frontend  
- Tests básicos en backend  

---

## 🚀 Demo rápido
- **Usuario:** `admin`  
- **Contraseña:** `admin123`  
- **Frontend:** http://localhost:5173  
- **Backend:** http://localhost:8000  
- **Health Check:** http://localhost:8000/api/health  

---

## ⚡ Cómo correrlo

### Backend
```bash
cd backend
python -m venv venv
# Windows: venv\Scripts\activate
# Linux/Mac: source venv/bin/activate
pip install -r requirements.txt
cp env.example .env
python app.py

```
### Frontendd
```bash
cd frontend
npm install
npm run dev
```

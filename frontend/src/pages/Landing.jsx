import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-primary-600">FullStack PT</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/login"
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Iniciar Sesión
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            Bienvenido a
            <span className="text-primary-600 block">FullStack PT</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Un sistema de autenticación moderno que demuestra las mejores prácticas 
            de desarrollo web full stack con Flask, React y Tailwind CSS.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              to="/login"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Comenzar Ahora
            </Link>
            <button className="bg-white hover:bg-gray-50 text-primary-600 px-8 py-4 rounded-lg text-lg font-medium border-2 border-primary-600 transition-colors duration-200">
              Ver Demo
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Características Principales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnologías modernas y arquitectura robusta para un sistema de autenticación completo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Autenticación JWT</h3>
              <p className="text-gray-600 mb-4">
                Tokens seguros con expiración configurable y manejo automático de sesiones
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Hash de contraseñas con bcrypt</li>
                <li>• Tokens con expiración de 1 hora</li>
                <li>• Validación automática de credenciales</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Arquitectura OOP</h3>
              <p className="text-gray-600 mb-4">
                Patrón Repository + Service para una separación clara de responsabilidades
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Models: Entidades de base de datos</li>
                <li>• Repositories: Acceso a datos</li>
                <li>• Services: Lógica de negocio</li>
                <li>• Controllers: Endpoints de API</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">UI Moderna</h3>
              <p className="text-gray-600 mb-4">
                Interfaz responsive y moderna construida con React y Tailwind CSS
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Diseño responsive</li>
                <li>• Componentes reutilizables</li>
                <li>• Rutas protegidas</li>
                <li>• Estado global con Context API</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Seguridad</h3>
              <p className="text-gray-600 mb-4">
                Implementación de las mejores prácticas de seguridad web
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• CORS configurado</li>
                <li>• Validación de datos con Pydantic</li>
                <li>• Sanitización de entradas</li>
                <li>• Manejo seguro de errores</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Testing</h3>
              <p className="text-gray-600 mb-4">
                Suite completa de tests para garantizar la calidad del código
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Tests unitarios con pytest</li>
                <li>• Tests de integración</li>
                <li>• Base de datos en memoria para tests</li>
                <li>• Cobertura de casos de éxito y error</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Documentación</h3>
              <p className="text-gray-600 mb-4">
                Documentación completa y código bien comentado
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• README detallado</li>
                <li>• Instrucciones de instalación</li>
                <li>• Ejemplos de uso de API</li>
                <li>• Commits atómicos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Stack Tecnológico
            </h2>
            <p className="text-xl text-gray-600">
              Tecnologías modernas y probadas en producción
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-2">🐍</div>
                <h3 className="font-semibold text-gray-900">Python</h3>
                <p className="text-sm text-gray-600">3.13</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-2">⚛️</div>
                <h3 className="font-semibold text-gray-900">React</h3>
                <p className="text-sm text-gray-600">18.2.0</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-2">🎨</div>
                <h3 className="font-semibold text-gray-900">Tailwind</h3>
                <p className="text-sm text-gray-600">3.3.5</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-2">🗄️</div>
                <h3 className="font-semibold text-gray-900">SQLite</h3>
                <p className="text-sm text-gray-600">SQLAlchemy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Prueba el sistema de autenticación con las credenciales de demostración
          </p>
          <Link 
            to="/login"
            className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
          >
            Iniciar Sesión
          </Link>
          <div className="mt-6 text-primary-100">
            <p className="text-sm">
              Usuario: <span className="font-mono bg-primary-700 px-2 py-1 rounded">admin</span> | 
              Contraseña: <span className="font-mono bg-primary-700 px-2 py-1 rounded">admin123</span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">FullStack PT</h3>
            <p className="text-gray-400 mb-6">
              Sistema de autenticación desarrollado como prueba técnica
            </p>
            <p className="text-sm text-gray-500">
              Desarrollado con ❤️ usando Flask, React y Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing

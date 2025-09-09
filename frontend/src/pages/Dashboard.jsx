import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { authService } from '../services/authService'

function Dashboard() {
  const { user, logout } = useAuth()
  const [healthStatus, setHealthStatus] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const status = await authService.healthCheck()
        setHealthStatus(status)
      } catch (error) {
        setHealthStatus({ status: 'error', message: 'Servidor no disponible' })
      } finally {
        setLoading(false)
      }
    }

    checkHealth()
  }, [])

  const handleLogout = () => {
    logout()
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Dashboard
              </h1>
              <p className="text-gray-600">Panel de control principal</p>
            </div>
            <button
              onClick={handleLogout}
              className="btn-secondary"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                ¡Bienvenido!
              </h2>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">Usuario:</span> {user?.username}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">ID:</span> {user?.id}
                </p>
                {user?.created_at && (
                  <p className="text-gray-600">
                    <span className="font-medium">Miembro desde:</span>{' '}
                    {new Date(user.created_at).toLocaleDateString('es-ES')}
                  </p>
                )}
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Estado del Sistema
              </h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-medium text-gray-600">API Status:</span>
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                    healthStatus?.status === 'healthy' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {healthStatus?.status || 'Desconocido'}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-gray-600">Base de datos:</span>
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                    healthStatus?.database === 'connected' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {healthStatus?.database || 'Desconocido'}
                  </span>
                </div>
                {healthStatus?.message && (
                  <p className="text-sm text-gray-600 mt-2">
                    {healthStatus.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Características del Sistema
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">🔐</div>
                  <h3 className="font-medium text-gray-900 mt-2">Autenticación JWT</h3>
                  <p className="text-sm text-gray-600">Tokens seguros con expiración</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">🏗️</div>
                  <h3 className="font-medium text-gray-900 mt-2">Arquitectura OOP</h3>
                  <p className="text-sm text-gray-600">Backend con capas bien definidas</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">⚡</div>
                  <h3 className="font-medium text-gray-900 mt-2">React + Vite</h3>
                  <p className="text-sm text-gray-600">Frontend moderno y rápido</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard

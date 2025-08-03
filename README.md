# Commission Management Dashboard

Una aplicación web moderna para la gestión integral de comisiones de ventas en concesionarios automotrices, desarrollada con React + Vite y Material-UI.

## 🚀 Características Principales

### 📊 Dashboard de Comisiones
- **Vista general** de métricas de comisiones por marca
- **Gráficos interactivos** con resúmenes financieros
- **Tarjetas estadísticas** con indicadores clave de rendimiento

### 📦 Gestión de Lotes de Comisiones
- **Procesamiento por lotes** de comisiones
- **Filtrado avanzado** por marca, estado y período
- **Seguimiento del estado** de procesamiento
- **Historial completo** de lotes procesados

### 📄 Carga de Documentos
- **Interfaz de carga** de archivos con drag & drop
- **Tipos de documentos** configurables
- **Historial de cargas** con estado de procesamiento
- **Validación de formatos** de archivo

### 👥 Gestión de Empleados
- **Directorio completo** de empleados
- **Perfiles detallados** con información de contacto
- **Historial de ventas** y comisiones por empleado
- **Navegación intuitiva** entre perfiles

### 💼 Gestión de Deals
- **Catálogo completo** de transacciones
- **Búsqueda avanzada** por múltiples criterios
- **Filtros dinámicos** por marca, empleado, estado
- **Detalles financieros** completos por deal

### 🏆 Rankings y Métricas
- **Rankings por rol** (Ejecutivos, Managers, F&I)
- **Métricas de rendimiento** comparativas
- **Badges de reconocimiento** por posición
- **Navegación por pestañas** entre categorías

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI)
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Icons**: Material-UI Icons
- **Styling**: CSS-in-JS con emotion

## 📋 Prerequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 22.12 o superior)
- **npm** (versión 8.0 o superior) o **yarn**

## 🔧 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd challenge
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Construcción
npm run build        # Construye la aplicación para producción
npm run preview      # Vista previa de la build de producción

# Linting
npm run lint         # Ejecuta ESLint para verificar el código
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes principales de páginas
│   ├── CommissionBatches.jsx
│   ├── CommissionDashboard.jsx
│   ├── DealsPage.jsx
│   ├── EmployeePage.jsx
│   ├── EmployeeProfile.jsx
│   ├── RankingsPage.jsx
│   └── UploadPage.jsx
├── contexts/           # Context providers
│   └── SidebarContext.jsx
├── helpers/            # Datos mock y utilidades
│   ├── mockBrandCommissions.js
│   ├── mockCommissionBatches.js
│   ├── mockDealsData.js
│   ├── mockEmployeeData.js
│   ├── mockRankingsData.js
│   └── mockUploadData.js
├── hooks/              # Custom hooks
│   └── useAdaptiveStyles.js
├── screens/            # Screen wrappers
│   ├── BatchesScreen.jsx
│   ├── CommissionsScreen.jsx
│   ├── DealsScreen.jsx
│   ├── EmployeeScreen.jsx
│   ├── EmployeeProfileScreen.jsx
│   ├── RankingsScreen.jsx
│   └── UploadScreen.jsx
├── Ui/                 # Componentes reutilizables
│   ├── ActionButton.jsx
│   ├── DashboardHeader.jsx
│   ├── DataTable.jsx
│   ├── SearchAndFilter.jsx
│   ├── SearchBox.jsx
│   ├── SectionHeader.jsx
│   ├── SidebarLayout.jsx
│   └── StatCard.jsx
├── App.jsx             # Componente principal
└── main.jsx           # Punto de entrada
```

## 🎨 Componentes Reutilizables

### SectionHeader
Componente para títulos de sección consistentes con iconos y subtítulos.

### DataTable
Tabla reutilizable con configuración flexible de columnas y renderizado de filas.

### SearchAndFilter
Componente de búsqueda y filtros avanzados con chips de filtros activos.

### StatCard
Tarjetas de estadísticas con iconos, valores y formato personalizable.

### SidebarLayout
Layout principal con navegación lateral responsiva.

## 🔗 Rutas de la Aplicación

- `/` - Dashboard de Comisiones
- `/batches` - Gestión de Lotes
- `/uploads` - Carga de Documentos
- `/employees` - Directorio de Empleados
- `/employee/:id` - Perfil de Empleado
- `/deals` - Gestión de Deals
- `/rankings` - Rankings y Métricas

## 📊 Características de UX/UI

- **Diseño Responsivo** - Adaptable a móviles, tablets y desktop
- **Navegación Intuitiva** - Sidebar colapsible con iconos claros
- **Filtros Avanzados** - Búsqueda en tiempo real con múltiples criterios
- **Feedback Visual** - Estados de hover, loading y validación
- **Consistencia** - Componentes reutilizables para UX uniforme

## 🚀 Despliegue

### Build para Producción
```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

### Servidor Web
Puedes servir la aplicación usando cualquier servidor web estático:

```bash
# Usando serve
npm install -g serve
serve -s dist
```

## 🔧 Configuración

### Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto para configuraciones específicas:

```env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=Commission Dashboard
```

### Personalización de Tema
Los estilos se pueden personalizar modificando los componentes en `src/Ui/` y el hook `useAdaptiveStyles.js`.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Si encuentras algún problema o tienes preguntas:

1. Revisa los [Issues existentes](../../issues)
2. Crea un nuevo Issue con detalles del problema
3. Incluye pasos para reproducir el error

## 🔄 Changelog

### v1.0.0
- ✅ Dashboard de comisiones con métricas
- ✅ Gestión completa de lotes de comisiones
- ✅ Sistema de carga de documentos
- ✅ Directorio y perfiles de empleados
- ✅ Gestión avanzada de deals
- ✅ Rankings multi-categoría
- ✅ Componentes reutilizables (DataTable, SearchAndFilter, etc.)
- ✅ Diseño responsivo y accesible

---

**Desarrollado con ❤️ usando React + Vite**

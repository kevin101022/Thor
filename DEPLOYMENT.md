# Guía de Despliegue en Vercel

## Preparación del proyecto

1. **Asegúrate de que el proyecto funciona localmente**
   ```bash
   npm start
   ```

2. **Construye el proyecto para producción**
   ```bash
   npm run build
   ```

## Despliegue en Vercel

### Opción 1: Desde GitHub (Recomendado)

1. **Sube el código a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Thor Anti-Scam platform"
   git branch -M main
   git remote add origin https://github.com/[tu-usuario]/thor-anti-scam.git
   git push -u origin main
   ```

2. **Conecta con Vercel**
   - Ve a https://vercel.com
   - Inicia sesión con GitHub
   - Haz clic en "New Project"
   - Selecciona tu repositorio `thor-anti-scam`
   - Vercel detectará automáticamente que es un proyecto React

3. **Configuración automática**
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

### Opción 2: Desde CLI de Vercel

1. **Instala Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Despliega el proyecto**
   ```bash
   vercel
   ```

3. **Sigue las instrucciones**
   - Confirma el directorio del proyecto
   - Selecciona tu cuenta/equipo
   - Confirma la configuración

## Configuraciones adicionales

### Variables de entorno (si las necesitas)
- En el dashboard de Vercel, ve a Settings > Environment Variables
- Agrega cualquier variable que necesites

### Dominio personalizado
- En Settings > Domains
- Agrega tu dominio personalizado si tienes uno

### Analytics
- Vercel ofrece analytics gratuitos
- Se activan automáticamente

## URLs del proyecto desplegado

Una vez desplegado, tendrás:
- URL principal: `https://thor-anti-scam.vercel.app`
- URLs de preview para cada commit
- URL de producción estable

## Actualizaciones automáticas

Cada vez que hagas push a la rama `main`:
1. Vercel detectará los cambios
2. Construirá automáticamente el proyecto
3. Desplegará la nueva versión
4. Te notificará por email del estado

## Monitoreo

- Dashboard de Vercel muestra:
  - Estadísticas de tráfico
  - Logs de construcción
  - Métricas de rendimiento
  - Errores en tiempo real
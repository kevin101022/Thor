# Guía Completa: Subir a GitHub y Desplegar Thor Anti-Scam

## 📋 Información del Proyecto
- **Desarrollador**: Kevin Rivera
- **Email**: kevinriversuarez@gmail.com
- **Proyecto**: Thor - Detecta estafas digitales antes de caer

## 🚀 Paso 1: Preparar el proyecto

### 1.1 Verificar que todo funciona localmente
```bash
npm start
```
Asegúrate de que la página carga correctamente en http://localhost:3000

### 1.2 Construir para producción
```bash
npm run build
```
Debe completarse sin errores.

## 📁 Paso 2: Crear repositorio en GitHub

### 2.1 Ir a GitHub
1. Ve a https://github.com
2. Inicia sesión con tu cuenta
3. Haz clic en el botón verde "New" o "+" → "New repository"

### 2.2 Configurar el repositorio
- **Repository name**: `thor-anti-scam`
- **Description**: `Plataforma educativa para detectar estafas digitales - Proyecto Talento Tech 2025`
- **Visibility**: Public ✅
- **Initialize**: NO marques ninguna opción (README, .gitignore, license)
- Haz clic en "Create repository"

## 💻 Paso 3: Subir el código

### 3.1 Inicializar Git (en la carpeta del proyecto)
```bash
git init
```

### 3.2 Configurar tu información (si no lo has hecho antes)
```bash
git config --global user.name "Kevin Rivera"
git config --global user.email "kevinriversuarez@gmail.com"
```

### 3.3 Agregar todos los archivos
```bash
git add .
```

### 3.4 Hacer el primer commit
```bash
git commit -m "Initial commit: Thor Anti-Scam platform - Proyecto Talento Tech 2025"
```

### 3.5 Conectar con GitHub
```bash
git branch -M main
git remote add origin https://github.com/kevinrivera/thor-anti-scam.git
```

### 3.6 Subir el código
```bash
git push -u origin main
```

## 🌐 Paso 4: Desplegar en Vercel (GRATIS)

### 4.1 Ir a Vercel
1. Ve a https://vercel.com
2. Haz clic en "Sign up" o "Login"
3. Selecciona "Continue with GitHub"
4. Autoriza a Vercel para acceder a tus repositorios

### 4.2 Importar proyecto
1. En el dashboard de Vercel, haz clic en "New Project"
2. Busca y selecciona `thor-anti-scam`
3. Haz clic en "Import"

### 4.3 Configurar despliegue
Vercel detectará automáticamente que es un proyecto React:
- **Framework Preset**: Create React App ✅
- **Build Command**: `npm run build` ✅
- **Output Directory**: `build` ✅
- **Install Command**: `npm install` ✅

Haz clic en "Deploy"

### 4.4 ¡Listo! 🎉
En 2-3 minutos tendrás tu página live en una URL como:
`https://thor-anti-scam.vercel.app`

## 🔄 Paso 5: Actualizaciones futuras

Cada vez que quieras actualizar la página:

```bash
# Hacer cambios en el código
git add .
git commit -m "Descripción de los cambios"
git push
```

Vercel automáticamente detectará los cambios y actualizará la página.

## 📱 Paso 6: Configurar Formspree (Opcional)

### 6.1 Crear cuenta en Formspree
1. Ve a https://formspree.io
2. Crea cuenta con tu email: kevinriversuarez@gmail.com
3. Crea un nuevo formulario llamado "Thor Anti-Scam Reports"

### 6.2 Obtener Form ID
1. Copia el Form ID (ejemplo: `xpzgkqyw`)
2. En tu código, busca `YOUR_FORM_ID` en `src/components/ContactForm/ContactForm.js`
3. Reemplázalo con tu ID real
4. Haz commit y push de los cambios

## 🎯 URLs Finales

Después del despliegue tendrás:
- **Repositorio GitHub**: https://github.com/kevinrivera/thor-anti-scam
- **Página Web**: https://thor-anti-scam.vercel.app (o similar)
- **Panel Vercel**: Para ver estadísticas y logs

## 🆘 Solución de Problemas

### Si git push falla:
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Si Vercel no detecta los cambios:
1. Ve al dashboard de Vercel
2. Haz clic en tu proyecto
3. Ve a "Deployments"
4. Haz clic en "Redeploy"

### Si hay errores de build:
1. Verifica que `npm run build` funcione localmente
2. Revisa los logs en Vercel
3. Asegúrate de que todas las dependencias estén en package.json

## 📞 Contacto

Si tienes problemas, puedes:
1. Revisar los logs en Vercel
2. Verificar que el repositorio esté público
3. Asegurarte de que todos los archivos se subieron correctamente

¡Tu proyecto Thor estará live en internet en menos de 10 minutos! 🚀
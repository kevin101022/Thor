#!/bin/bash

# Script de despliegue automático para Thor Anti-Scam
# Desarrollado por Kevin Rivera - Talento Tech 2025

echo "🚀 Iniciando despliegue de Thor Anti-Scam..."

# Verificar que estamos en un proyecto React
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json. Asegúrate de estar en la carpeta del proyecto."
    exit 1
fi

# Construir el proyecto
echo "🔨 Construyendo proyecto para producción..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error en la construcción. Revisa los errores arriba."
    exit 1
fi

echo "✅ Construcción exitosa!"

# Verificar si Git está inicializado
if [ ! -d ".git" ]; then
    echo "📁 Inicializando repositorio Git..."
    git init
    git config user.name "Kevin Rivera"
    git config user.email "kevinriversuarez@gmail.com"
fi

# Agregar archivos
echo "📝 Agregando archivos al repositorio..."
git add .

# Hacer commit
echo "💾 Creando commit..."
read -p "Describe los cambios realizados: " commit_message
if [ -z "$commit_message" ]; then
    commit_message="Actualización de Thor Anti-Scam - $(date '+%Y-%m-%d %H:%M')"
fi

git commit -m "$commit_message"

# Verificar si el remote existe
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Configurando conexión con GitHub..."
    git branch -M main
    git remote add origin https://github.com/kevinrivera/thor-anti-scam.git
fi

# Subir a GitHub
echo "⬆️ Subiendo a GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "🎉 ¡Despliegue exitoso!"
    echo "📱 Tu página estará disponible en: https://thor-anti-scam.vercel.app"
    echo "📁 Repositorio: https://github.com/kevinrivera/thor-anti-scam"
    echo ""
    echo "Si es la primera vez, ve a https://vercel.com para conectar tu repositorio."
else
    echo "❌ Error al subir a GitHub. Revisa tu conexión y credenciales."
fi
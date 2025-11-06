#!/bin/bash

# Script de actualización rápida para Thor Anti-Scam
# Por Kevin Rivera - Talento Tech 2025

echo "🔄 Actualizando Thor Anti-Scam..."

# Verificar que estamos en el proyecto correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No estás en la carpeta del proyecto Thor"
    exit 1
fi

# Probar que el proyecto funciona
echo "🧪 Probando que todo funciona..."
npm run build > /dev/null 2>&1

if [ $? -ne 0 ]; then
    echo "❌ Error: El proyecto tiene errores. Ejecuta 'npm start' para revisar."
    exit 1
fi

echo "✅ Proyecto funciona correctamente!"

# Pedir mensaje de commit
echo ""
read -p "📝 ¿Qué cambios hiciste? (ej: 'Agregado chatbot'): " mensaje

if [ -z "$mensaje" ]; then
    mensaje="Actualización Thor - $(date '+%d/%m/%Y %H:%M')"
fi

# Hacer el proceso de actualización
echo "📦 Agregando archivos..."
git add .

echo "💾 Guardando cambios..."
git commit -m "$mensaje"

echo "⬆️ Subiendo a GitHub..."
git push

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 ¡Actualización exitosa!"
    echo "🌐 Tu página se actualizará en 2-3 minutos en:"
    echo "   https://thor-anti-scam.vercel.app"
    echo ""
    echo "📱 También puedes ver el progreso en:"
    echo "   https://vercel.com/dashboard"
else
    echo "❌ Error al subir. Intenta:"
    echo "   git pull origin main"
    echo "   git push"
fi
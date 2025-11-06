# Integración del Chatbot de Chatbase

## Configuración del widget flotante

El proyecto Thor está diseñado para funcionar con un chatbot flotante de Chatbase que proporciona asistencia IA especializada en detección de estafas.

### Pasos para integrar el chatbot:

1. **Crear cuenta en Chatbase**
   - Ve a https://www.chatbase.co
   - Crea una cuenta
   - Crea un nuevo chatbot

2. **Entrenar el chatbot**
   - Sube documentación sobre estafas digitales
   - Incluye información sobre las 4 estafas más comunes
   - Agrega datos sobre procedimientos en Colombia
   - Entrena con ejemplos de mensajes sospechosos

3. **Obtener el código del widget**
   - En Chatbase, ve a la sección "Embed"
   - Copia el código del widget flotante
   - Se verá similar a esto:

```html
<script>
window.embeddedChatbotConfig = {
chatbotId: "TU_CHATBOT_ID",
domain: "www.chatbase.co"
}
</script>
<script
src="https://www.chatbase.co/embed.min.js"
chatbotId="TU_CHATBOT_ID"
domain="www.chatbase.co"
defer>
</script>
```

4. **Integrar en el proyecto**
   - Abre `public/index.html`
   - Agrega el código del widget antes del cierre de `</body>`
   - Reemplaza `TU_CHATBOT_ID` con tu ID real

### Ejemplo de integración:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <!-- ... resto del head ... -->
  </head>
  <body>
    <noscript>Necesitas habilitar JavaScript para ejecutar esta aplicación.</noscript>
    <div id="root"></div>
    
    <!-- Chatbot de Chatbase -->
    <script>
    window.embeddedChatbotConfig = {
    chatbotId: "abc123def456",
    domain: "www.chatbase.co"
    }
    </script>
    <script
    src="https://www.chatbase.co/embed.min.js"
    chatbotId="abc123def456"
    domain="www.chatbase.co"
    defer>
    </script>
  </body>
</html>
```

### Configuraciones recomendadas del chatbot:

**Personalidad y tono:**
- Profesional y confiable
- Especializado en ciberseguridad
- Respuestas claras y directas
- Enfoque educativo, no alarmista

**Conocimiento base:**
- Tipos de estafas digitales comunes
- Procedimientos legales en Colombia
- Contactos de autoridades (Policía, Fiscalía)
- Mejores prácticas de seguridad digital

**Respuestas tipo:**
- "Basándome en lo que describes, esto presenta varias señales de alerta..."
- "Te recomiendo contactar inmediatamente a..."
- "Para verificar si es legítimo, puedes..."

### Posicionamiento del widget:

El widget flotante aparecerá automáticamente en la esquina inferior derecha y no interferirá con el diseño de la página, ya que el CSS está optimizado para coexistir con elementos flotantes.

### Testing:

1. Despliega el sitio con el widget integrado
2. Prueba diferentes tipos de consultas
3. Verifica que las respuestas sean coherentes
4. Ajusta el entrenamiento según sea necesario
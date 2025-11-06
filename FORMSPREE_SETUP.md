# Configuración de Formspree

## Pasos para configurar el formulario de contacto:

1. **Crear cuenta en Formspree**
   - Ve a https://formspree.io
   - Crea una cuenta gratuita
   - Verifica tu email

2. **Crear nuevo formulario**
   - En el dashboard, haz clic en "New Form"
   - Nombre: "Thor Anti-Scam Reports"
   - Email de destino: tu email donde recibirás los reportes

3. **Obtener el Form ID**
   - Una vez creado el formulario, copia el Form ID
   - Se ve así: `xpzgkqyw` (ejemplo)

4. **Actualizar el código**
   - Abre `src/components/ContactForm/ContactForm.js`
   - Busca la línea: `https://formspree.io/f/YOUR_FORM_ID`
   - Reemplaza `YOUR_FORM_ID` con tu Form ID real
   - Ejemplo: `https://formspree.io/f/xpzgkqyw`

5. **Configuraciones adicionales (opcional)**
   - En Formspree, puedes configurar:
     - Mensaje de confirmación personalizado
     - Redirección después del envío
     - Filtros anti-spam
     - Notificaciones por email

## Ejemplo de configuración final:

```javascript
const response = await fetch('https://formspree.io/f/xpzgkqyw', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: formData.name,
    email: formData.email,
    capture: formData.capture,
    message: formData.message,
    _subject: 'Nuevo reporte de estafa - Thor Anti-Scam'
  }),
});
```

## Plan gratuito de Formspree:
- 50 envíos por mes
- Perfecto para proyectos académicos
- Sin costo
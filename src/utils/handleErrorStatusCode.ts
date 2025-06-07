export function handleErrorsStatusCode(status: number) {
    switch (status) {
        case 400:
            return "Solicitud incorrecta. Verifique los datos enviados para el recurso solicitado.";
        case 401:
            return "No autorizado. Por favor, asegúrese de tener los permisos necesarios para acceder al recurso.";
        case 403:
            return "Prohibido. No tiene autorización para realizar esta acción sobre el recurso.";
        case 404:
            return "Recurso no encontrado. Verifique que la URL o el identificador del recurso sean correctos.";
        case 408:
            return "Tiempo de espera agotado. El servidor tardó demasiado en responder al recurso solicitado.";
        case 409:
            return "Conflicto. El recurso ya existe y no se puede duplicar.";
        case 429:
            return "Demasiadas solicitudes. Ha excedido el límite de peticiones para este recurso.";
        case 500:
            return "Error interno del servidor. Ocurrió un problema al procesar el recurso.";
        case 503:
            return "Servicio no disponible. El recurso no está accesible en este momento.";
        default:
            return "Error desconocido. Ocurrió un problema al intentar acceder al recurso.";
    }
}
@regresion @yvytu
Feature: Home Yvytu Tarea Agustina Gramajo

Scenario: Verificar seccion Como llegar
    Given que un usuario está en la página de "Yvytu"
    When el usuario hace scroll hasta "Cómo llegar"
    And la seccion con el id "como-llegar" contiene el texto "La reserva está situada a 140 Km de Puerto Iguazú"
    And Se verifica que la imagen tenga las dimensiones "320" de ancho y "214" de alto
    And Se verifica que esta presente el mapa de Google Map con titulo "Mapa de ubicación"
const usuario = "leo";
const contraseña = "2468";
let intentosDeInicioDeSesión = 0;
let usuarioEncontrado = false;

while ( intentosDeInicioDeSesión < 3 && !usuarioEncontrado) {
    let usuarioIngresado = prompt("Por favor ingrese su usuario:");
    let contraseñaIngresada = prompt("Por favor ingrese su contraseña:");

    if (usuarioIngresado === usuario && contraseñaIngresada === contraseña) {
        usuarioEncontrado= true;
        console.log("Bienvenido.");
    } else {
        intentosDeInicioDeSesión++;
        console.log("Usuario u Contraseña incorrecta. Intento " +  intentosDeInicioDeSesión + " de 3.");
    }
}

if (!usuarioEncontrado) {
    console.log("Usuario no encontrado. Se han agotado los intentos de inicio de sesión.");
} else {
    let estudiantesAprobados = 0;
    let totalEstudiantes = 0;
    let nombresAprobados = [];

    while (true) {
        let nombreEstudiante = prompt("Ingrese el nombre del estudiante (o 'finalizar' para terminar):");
        if (nombreEstudiante.toLowerCase() === 'finalizar') {
            break;
        }

        totalEstudiantes++;

        let materias = ["Desarrollo de software", "Administración", "Contabilidad"];
        let notaFinalTotal = 0;
        let aprobado = true; 

        for (let i = 0; i < materias.length; i++) {
            let notaFinal = 0;

            for (let j = 1; j <= 3; j++) {
                let nota1 = parseFloat(prompt(`Ingrese la primera nota del momento ${j} para ${materias[i]}:`));
                let nota2 = parseFloat(prompt(`Ingrese la segunda nota del momento ${j} para ${materias[i]}:`));
                let nota3 = parseFloat(prompt(`Ingrese la tercera nota del momento ${j} para ${materias[i]}:`));

                let notaMomento = (nota1 * 0.2) + (nota2 * 0.2) + (nota3 * 0.6);
                notaFinal += notaMomento * 0.2;
            }

            notaFinal += (notaFinal * 0.6);
            notaFinalTotal += notaFinal;

            if (notaFinal < 3.0) {
                aprobado = false; 
            }
        }

        if (aprobado) {
            estudiantesAprobados++;
            nombresAprobados.push(nombreEstudiante);
        }
    }

    console.log(`Total de estudiantes registrados: ${totalEstudiantes}`);
    console.log(`Total estudiantes aprobados: ${estudiantesAprobados}`);
    console.log(`Nombres de estudiantes aprobados: ${nombresAprobados.join(', ')}`);
}
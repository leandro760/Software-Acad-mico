const usuarioCorrecto = "leo";
const contraseñaCorrecta = "2468";
let intentos = 0;
let acceso = false;

while (intentos < 3 && !acceso) {
    let usuario = prompt("Por favor ingrese su usuario:");
    let contraseña = prompt("Por favor ingrese su contraseña:");

    if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {
        acceso = true;
        console.log("Bienvenido.");
    } else {
        intentos++;
        console.log("Usuario u Contraseña incorrecta. Intento " + intentos + " de 3.");
    }
}

if (!acceso) {
    console.log("Acceso denegado. Se han agotado los intentos.");
} else {
    let estudiantesAprobados = 0;
    let totalEstudiantes = 0;
    let nombresAprobados = [];

    while (true) {
        let nombreEstudiante = prompt("Ingrese el nombre del estudiante (o 'salir' para terminar):");
        if (nombreEstudiante.toLowerCase() === 'salir') {
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
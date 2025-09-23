let nombresEstudiantes = []
let documentosEstudiantes = []
let notasEstudiantes = []

let registrarEstudiante = () => {
    let repetir = true
    while (repetir) {
        let nombreEstudiante = prompt("Ingrese el nombre del estudiante: ")
        let documentoEstudiante = prompt("Ingrese el documento del estudiante: ")
        let notaEstudiante = prompt("Ingrese la nota del estudiante: ")
        nombresEstudiantes.push(nombreEstudiante)
        documentosEstudiantes.push(documentoEstudiante)
        notasEstudiantes.push(notaEstudiante)
        let opcion = prompt("¿Desea registrar un nuevo estudiantes?\n1 = Si\n2 = No")
        if (opcion == "2") {
            repetir = false
        }
    }
}
let buscarEstudiante = () => { }
let filtrarEstudiantesGanaron = () => { }
let filtrarEstudiantesPerdieron = () => { }
let filtrarEstudiantesConPlanMejoramiento = () => { }




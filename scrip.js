class Alumnos{
    constructor(nombre, curso, carrera, promedio){
        this.nombre = nombre
        this.curso = curso
        this.carrera = carrera
        this.promedio = promedio
    }
}
const alumno1 = new Alumnos("Juan", "5to año", "Kinesiologia", 9)
const alumno2 = new Alumnos("Pedro", "5to año", "Kinesiologia", 8)
const alumno3 = new Alumnos("Ana", "5to año", "Kinesiologia", 10)

const alumnos = [alumno1,alumno2,alumno3]

const alumno = new Alumnos(prompt("Ingrese nombre"), prompt("Ingrese el curso"), prompt("Ingrese la carrera"), parseFloat(prompt("Ingrese el promedio")))

alumnos.push(alumno)
console.table(alumnos)



//hice una tabla para incluir los datos del alumno en el sistema



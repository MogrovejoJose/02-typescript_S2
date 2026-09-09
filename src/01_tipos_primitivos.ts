export const nombreEstudiante: string = "Jose Mogrovejo"; 
export const edadEstudiante: number = 17; 
export const promedioObjetivo: number = 9.5;
export let estaMatriculado: boolean = true;

export function obtenerResumenPersonal(): string {
  let estado = "NO_MATRICULADO";
  if (estaMatriculado == true) {
    estado = "MATRICULADO";
  }
  return "👤 Estudiante: " + nombreEstudiante + " | 🎂 Edad: " + edadEstudiante + " años | 🎯 Meta: " + promedioObjetivo + "/10 | 📋 Estado: " + estado;
}

export function calcularPromedio(notas: number[]): number {
  if (notas.length == 0) {
    return 0;
  }
  
  let suma = 0;
  for (let i = 0; i < notas.length; i = i + 1) {
    suma = suma + notas[i]!;
  }
  
  let promedio = suma / notas.length;
  let promedioTexto = promedio.toFixed(2);
  return Number(promedioTexto);
}

export function formatearFichaEstudiante(
  nombre: string,
  edad: number,
  paralelo: "E1" | "E2",
  activo: boolean
): string {
  let estado = "RETIRADO";
  if (activo == true) {
    estado = "MATRICULADO";
  }
  return "[FICHA UETS] " + nombre.toUpperCase() + " (" + edad + " años) - Paralelo: " + paralelo + " - Estado: " + estado;
}
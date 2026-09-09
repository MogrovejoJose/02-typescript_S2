
export const nombreEstudiante: string = "Jose Mogrovejo"; 
export const edadEstudiante: number = 17; 
export const promedioObjetivo: number = 9.5;
export let estaMatriculado: boolean = true;

export function obtenerResumenPersonal(): string {
  const estado = estaMatriculado ? "MATRICULADO" : "NO_MATRICULADO";
  return `👤 Estudiante: ${nombreEstudiante} | 🎂 Edad: ${edadEstudiante} años | 🎯 Meta: ${promedioObjetivo}/10 | 📋 Estado: ${estado}`;
}

export function calcularPromedio(notas: readonly number[]): number {
  if (notas.length === 0) {
    return 0;
  }
  const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
  return Number((suma / notas.length).toFixed(2));
}

export function formatearFichaEstudiante(
  nombre: string,
  edad: number,
  paralelo: "E1" | "E2",
  activo: boolean
): string {
  const estado = activo ? "MATRICULADO" : "RETIRADO";
  return `[FICHA UETS] ${nombre.toUpperCase()} (${edad} años) - Paralelo: ${paralelo} - Estado: ${estado}`;
}
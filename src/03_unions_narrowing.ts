export function formatearIdentificador(id: string | number): string {
  if (typeof id == "string") {
    const textoEnMayusculas = id.toUpperCase();
    const resultadoFinal = "ID-ALFANUMERICO-" + textoEnMayusculas;
    return resultadoFinal;
  } else {
    const numeroConFormato = id.toFixed(0).padStart(6, "0");
    const resultadoFinal = "ID-NUMERICO-#" + numeroConFormato;
    return resultadoFinal;
  }
}

export interface EstadoCargando {
  status: "LOADING";
  porcentaje: number;
}

export interface EstadoExito {
  status: "SUCCESS";
  datos: "T";
  hora: string;
}

export interface EstadoError {
  status: "ERROR";
  codigo: number;
  mensaje: string;
}

export type EstadoPantalla =
  | EstadoCargando
  | EstadoExito
  | EstadoError;

export function renderizarEstadoUI(estado: EstadoPantalla): string {
  const statusActual = estado.status;

  switch (statusActual) {
    case "LOADING": {
      const porcentaje = estado.porcentaje;
      const mensajeCargando = `⏳ Cargando datos (${porcentaje}%)...`;
      return mensajeCargando;
    }

    case "SUCCESS": {
      const hora = estado.hora;
      const mensajeExito = `🎉 Datos cargados con éxito a las ${hora}`;
      return mensajeExito;
    }

    case "ERROR": {
      const codigo = estado.codigo;
      const mensajeError = estado.mensaje;
      const textoError = `❌ Error ${codigo}: ${mensajeError}`;
      return textoError;
    }
  }
}
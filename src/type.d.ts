export type Activity = {
  id: number;
  job: Job;
  description: string;
  solution: string;
  start_date: string;
  end_date: string;
  area: Area;
  stop_machine: boolean;
};

export enum Job {
  OTPV = "OTPV",
  OTFM = "OTFM",
  OTCO = "OTCO",
  OTPD = "OTPD",
  OTEM = "OTEM",
}

export enum Area {
  MOLINO = "Molino",
  CHANCADO = "Chancado",
  EMBOLSADO_ICO = "Embolsado ICO",
  EMBOLSADO_SUR = "Embolsado Sur",
  GARITA = "Garita",
  OFICINA = "Oficina",
  TALLER_ELECTRICO = "Taller Eléctrico",
  TALLER_MECANICO = "Taller Mecánico",
  PERIMETRO = "Perímetro",
  SUBESTACION_MT = "Subestación de M.T.",
  SUBESTACION_BT = "Subestación de B.T.",
  SUBESTACION_TRAFOS = "Subestación de Trafos",
  TOPICO = "Tópico",
  SIG = "SIG",
  LABORATORIO_FISICO = "Laboratorio Físico",
  LABORATORIO_QUIMICO = "Laboratorio Químico",
  PLANTA_GENERAL = "Planta General",
  COMPRESORA_NORTE = "Compresora Norte",
  COMPRESORA_SUR = "Compresora Sur",
}

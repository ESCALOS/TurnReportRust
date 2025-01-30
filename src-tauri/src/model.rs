use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct Activity {
    id: u32,
    job: Job,
    description: String,
    solution: String,
    start_date: String,
    end_date: String,
    area: Area,
    stop_machine: bool
  }

  impl Activity {
    pub fn new(id: u32, job: Job, description: String, solution: String, start_date: String, end_date: String, area: Area, stop_machine: bool) -> Self {
      Self {
        id,
        job,
        description,
        solution,
        start_date,
        end_date,
        area,
        stop_machine
      }
    }

    pub fn get_start_date(&self) -> String {
      self.start_date.clone()
    }

  }
  
  #[derive(Clone, Copy, Serialize, Deserialize, Debug)]
  pub enum Job {
    OTPV,
    OTFM,
    OTCO,
    OTPD,
    OTEM,
  }
  
  #[derive(Clone, Copy, Serialize, Deserialize, Debug)]
  pub enum Area {
    Molino,
    Chancado,
    EmbolsadoICO,
    EmbolsadoSur,
    Garita,
    Oficina,
    TallerElectrico,
    TallerMecanico,
    Perimetro,
    SubestacionMT,
    SubestacionBT,
    SubestacionTrafos,
    Topico,
    SIG,
    LaboratorioFisico,
    LaboratorioQuimico,
    PlantaGeneral,
    CompresoraNorte,
    CompresoraSur,
  }

  // impl Area {
  //   pub fn label(&self) -> &str {
  //       match self {
  //           Self::Molino => "Molino",
  //           Self::Chancado => "Chancado",
  //           Self::EmbolsadoICO => "Embolsado ICO",
  //           Self::EmbolsadoSur => "Embolsado Sur",
  //           Self::Garita => "Garita",
  //           Self::Oficina => "Oficina",
  //           Self::TallerElectrico => "Taller Eléctrico",
  //           Self::TallerMecanico => "Taller Mecánico",
  //           Self::Perimetro => "Perímetro",
  //           Self::SubestacionMT => "Subestación de M.T.",
  //           Self::SubestacionBT => "Subestación de B.T.",
  //           Self::SubestacionTrafos => "Subestación de Trafos",
  //           Self::Topico => "Tópico",
  //           Self::SIG => "SIG",
  //           Self::LaboratorioFisico => "Laboratorio Físico",
  //           Self::LaboratorioQuimico => "Laboratorio Químico",
  //           Self::PlantaGeneral => "Planta General",
  //           Self::CompresoraNorte => "Compresora Norte",
  //           Self::CompresoraSur => "Compresora Sur",
  //       }
  //   } 
  // }
  
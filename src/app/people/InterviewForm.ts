export interface InterviewForm {
  anamnesis: string | null;
  date: string | null;
  treatment: {
    lensometria: Eyes & {
      add: string | null;
    };
    refraccion: {
      lejos: Eyes;
      av: Eyes;
      add: string | null;
      dip: string | null;
    };
    lentesContacto: {
      poder: Eyes;
      curvaBase: Eyes;
      diametro: Eyes;
    };
  };
  exam: {
    agudezaVisual: {
      sc: Eyes;
      cc: Eyes;
      precisionOcular: Eyes;
    };
    poloAnterior: {
      parpados: Eyes;
      conjutiva: Eyes;
      cornea: Eyes;
      iris: Eyes;
      pupila: Eyes;
      camaraAnterior: Eyes;
      cristalino: Eyes;
    };
    poloPosterior: {
      vitreo: Eyes;
      nervioOptico: Eyes;
      macula: Eyes;
      retinaPeriferica: Eyes;
    };
    motilidadOcular: {
      kappa: Eyes;
      hirschberg: Eyes;
      coverTest: Eyes;
      ppc: Eyes;
    };
    queratrometria: {
      k1: Eyes;
      k2: Eyes;
    };
  };
  diagnostic: string | null;
  specialist: string | null;
}

type Eyes = {
  od: string | null;
  oi: string | null;
};

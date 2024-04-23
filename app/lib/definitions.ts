export type RezCounts = {
  Waiting: number;
  Processing: number;
  Canceled: number;
  Transferred: number;
};

export type Reservation = {
  RezId: number;
  Hacim: number;
  KayitTarih: Date;
  SonStatu: string;
  KayitKullanici: string;
  GuncellemeKullanici: string;
  DurumNot: string;
};

export type LatestReservation = {
  RezId: number;
  Hacim: number;
  KayitTarih: Date;
  SonStatu: string;
  KayitKullanici: string;
  GuncellemeKullanici: string;
  DurumNot: string;
};

export type LatestReservationRaw = Omit<LatestReservation, 'Hacim'> & {
  Hacim: number;
};

export type ReservationsTable = {
  RezId: number;
  Hacim: number;
  KayitTarih: Date;
  SonStatu: string;
  KayitKullanici: string;
  GuncellemeKullanici: string;
  DurumNot: string;
};

export type ReservationForm = {
  RezId: number;
  Hacim: number;
  KayitTarih: Date;
  SonStatu: string;
  KayitKullanici: string;
  GuncellemeKullanici: string;
  DurumNot: string;
};

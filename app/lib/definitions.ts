export type RezCounts = {
  Waiting: number;
  Processing: number;
  Canceled: number;
  Transferred: number;
};

export type Reservation = {
  [key: string]: any;
  RezId: number;
  YukHazirTarihi: Date;
  MuhtemelCikisTarihi: Date;
  Hacim: number;
  KapAdet: number;
  Kilo: number;
  MuhtemelVarisTarihi: Date;
  MalinCinsi: string;
  TeslimSekli: string;
  AnaKonsimentoNo: string;
  ArakonsimentoNo: string;
  GemiAdi: string;
  YurtDisiFirmaId: number;
  YurtIciFirmaId: number;
  YurtDisiAcenteId: number;
  CikisYeriId: number;
  VarisYeriId: number;
  HatId: number;
  KayitKullanici: string;
  KayitTarih: Date;
  GuncellemeKullanici: string;
  GuncellemeTarih: Date;
  RezDurum: number;
  PickUpTarihi: Date;
  CutOffTarihi: Date;
  KonteynerList: string;
  CikisLimaniId: number;
  AktarmaGemiAdi: string;
  BargePortSailingDate: Date;
  YDAntrepoTarih: Date;
  SabitNot: string;
  GondericiOdemeBekliyor: boolean;
  AcenteLocalMasrafBekliyor: boolean;
  YurtDisiFirmaName: string;
  YurtIciFirmaName: string;
  HatName: string;
  CikisYeriName: string;
  CikisLimaniName: string;
  VarisYeriName: string;
  Durum: number;
  DurumNot: string;
  DurumName: string;
  ArmatorCutOff: Date;
  KalanSure: number;
  KonsolNo: string;
  KonsolPlan: string;
  SOStatus: number;
  KirmiziVarWeb: number;
  Istif: boolean;
  SonStatu_TabanRenk: string;
  YukHazirTarihi_TabanRenk: string;
  MuhtemelCikisTarihi_TabanRenk: string;
  MuhtemelVarisTarihi_TabanRenk: string;
  PickUpTarihi_TabanRenk: string;
  CutOffTarihi_TabanRenk: string;
  BargePortSailingDate_TabanRenk: string;
  YDAntrepoTarih_TabanRenk: string;
  ArmatorCutOff_TabanRenk: string;
  GecerlilikTarih_TabanRenk: string;
  TerminTarihi_TabanRenk: string;
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

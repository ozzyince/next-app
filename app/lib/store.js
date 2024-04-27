export const resStatusSource = [
  { k: 0, v: 'Waiting' },
  { k: 1, v: 'Processing' },
  { k: 2, v: 'Canceled' },
  { k: 3, v: 'Transferred' },
];

export const istifSource = [
  { k: true, v: 'Stackable' },
  { k: false, v: 'Non-stackable' },
];

export const fixedNoteSource = [
  { k: 'ORİJİNAL KONŞİMENTO GEREKLİDİR.', v: 'Original Bill of Lading' },
  { k: 'BANKA CİROLU KONŞİMENTO GEREKLİDİR.', v: 'Bank Bill of Lading' },
  { k: 'TELEX RELEASE.', v: 'Telex Release' },
];

export const containerTypeSource = [
  { k: 35, v: '20BO' },
  { k: 2, v: '20DC' },
  { k: 34, v: '20FR' },
  { k: 32, v: '20FT' },
  { k: 39, v: '20GOH' },
  { k: 37, v: '20HP' },
  { k: 33, v: '20OP' },
  { k: 31, v: '20OT' },
  { k: 38, v: '20RF' },
  { k: 36, v: '20TA' },
  { k: 45, v: '40BO' },
  { k: 13, v: '40DC' },
  { k: 40, v: '40DC GOH' },
  { k: 48, v: '40EP' },
  { k: 51, v: '40FL' },
  { k: 44, v: '40FR' },
  { k: 54, v: '40GOH' },
  { k: 15, v: '40HC' },
  { k: 41, v: '40HC GOH' },
  { k: 47, v: '40HP' },
  { k: 49, v: '40HR' },
  { k: 43, v: '40OP' },
  { k: 46, v: '40OT' },
  { k: 52, v: '40PL' },
  { k: 42, v: '40RC' },
  { k: 53, v: '40RF' },
  { k: 55, v: '45HC' },
  { k: 56, v: '45HP' },
  { k: 1, v: 'LCL' },
];

export const incotermSource = [
  { k: 5, v: 'CIF' },
  { k: 4, v: 'CFR' },
  { k: 16, v: 'EXW' },
  { k: 18, v: 'FCA' },
  { k: 20, v: 'FOB' },
  { k: 29, v: 'DAP' },
];

export const docTypeSource = [
  { k: 1, v: 'MBL' },
  { k: 2, v: 'HBL' },
  { k: 3, v: 'Cargo Manifest' },
  { k: 4, v: 'Container Loading Plan' },
  { k: 5, v: 'Credit Note' },
  { k: 6, v: 'Debit Note' },
  { k: 11, v: 'Other' },
  { k: 13, v: 'Shipping Order' },
  { k: 14, v: 'Draft HBLs' },
];

export const statusSource = [
  { k: 72, v: 'SPG - ORDER GIVEN' },
  { k: 68, v: 'GYD - SHIPPER’S INFORMATION IS WAITING' },
  { k: 92, v: 'SOE - SO ATTACHED' },
  { k: 91, v: 'SOY - SO NOT ATTACHED' },
  { k: 94, v: 'SOD - CORRECT SO' },
  { k: 93, v: 'SOH - INCORRECT SO' },
  { k: 100, v: 'IDK - CONTACT DETAILS CONTROL' },
  { k: 89, v: 'IDB - WAITING CONTACT DETAILS' },
  { k: 11, v: 'HZD - GOODS NOT READY' },
  { k: 85, v: 'MSDS - MSDS APPROVAL PENDING' },
  { k: 10, v: 'ODM - WAITING FOR PAYMENT' },
  { k: 79, v: 'ÖT - PAYMENT COMPLETED' },
  { k: 95, v: 'ACB - AWAITING RESPONSE FROM AGENCY' },
  { k: 96, v: 'ACV - AGENCY RESPONDED' },
  { k: 97, v: 'OCB - AWAITING RESPONSE FROM OPERATION' },
  { k: 98, v: 'OCV - OPERATION RESPONDED' },
  { k: 101, v: 'WCU - WECHAT ALERT' },
  { k: 82, v: 'SK - STATUS CONTROL' },
  { k: 80, v: 'ALK - WAITING BARGE PORT SAILING DATE' },
  { k: 69, v: 'ALG - GOING TO THE TRANSFER PORT' },
  { k: 81, v: 'YDA - WAITING PORT WAREHOUSE ARRIVAL DATE' },
  { k: 70, v: 'YL - AT PORT OF LOADING WAREHOUSE' },
  { k: 14, v: 'CKS - WAITING FOR DEPARTURE' },
  { k: 99, v: 'CEY - DOCUMENTS NOT UPLOADED BEFORE DEPARTURE' },
  { k: 25, v: 'CKY - SAILED' },
  { k: 83, v: 'DY - DOCUMENTS UPLOADED' },
  { k: 64, v: 'TLX - TELEX RELEASE ISSUED' },
  { k: 60, v: 'TAA - UNDERTAKING RECEIVED' },
  { k: 56, v: 'OKA - ORIGINAL B/L RECEIVED' },
  { k: 37, v: 'OAL - DELIVERY ORDER RECEIVED' },
  { k: 38, v: 'OVE - DELIVERY ORDER GIVEN' },
];

export const statusSubsetSource = statusSource.filter((i) => [68, 10, 80, 81, 70, 11, 14, 25, 83, 85, 69, 100, 98, 97].includes(i.k));

export const statusSOSource = statusSource.filter((i) => [92, 91, 94, 93].includes(i.k));

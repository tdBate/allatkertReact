import type { Allat } from "../src/components/AllatTabla";

export const elohelyek: string[] = [
  "Afrikai szavanna",
  "Ázsiai esőerdő",
  "Dél-amerikai őserdő",
  "Sarki vidék",
  "Ausztráliai területek",
];

export const nepszeruAllatok: string[] = [
  "Oroszlán",
  "Elefánt",
  "Zsiráf",
  "Panda",
  "Pingvin",
];

export const taplalkozas: string[] = [
  "Növényevő",
  "Húsevő",
  "Mindenevő",
  "Gyümölcsevő",
  "Rovarokkal táplálkozó",
];

export const allatok: Allat[] = [
  {
    nev: "Szimba",
    eletkor: 8,
    suly: 190,
    veszelyeztetett: true,
    kedvenc_etelek: ["Marhahús", "csirkehús"],
  },
  {
    nev: "Lili",
    eletkor: 12,
    suly: 3200,
    veszelyeztetett: false,
    kedvenc_etelek: ["Fű", "levelek", "gyümölcsök"],
  },
  {
    nev: "Beni",
    eletkor: 6,
    suly: 850,
    veszelyeztetett: true,
    kedvenc_etelek: ["Levelek", "ágak"],
  },
  {
    nev: "Pötyi",
    eletkor: 5,
    suly: 95,
    veszelyeztetett: true,
    kedvenc_etelek: ["Bambusz", "sárgarépa"],
  },
  {
    nev: "Csőrike",
    eletkor: 4,
    suly: 28,
    veszelyeztetett: false,
    kedvenc_etelek: ["Hal", "krill"],
  },
];
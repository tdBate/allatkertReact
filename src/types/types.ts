import type { ReactNode } from "react";

export interface Allat {
    nev: string;
    eletkor: number;
    suly: number;
    veszelyeztetett: boolean;
    kedvenc_etelek: string[];
}

export interface AllatTablaProps {
    lista: Allat[]
}

export interface AllatCardProps {
    fajta: string;
    nev: string;
    eletkor: number;
    suly: number;
    veszelyeztetett: boolean;
    kedvenc_etelek: string[];
}

export interface ListaCardProps {
    title: string,
    list: string[],
    numbered: boolean
}

export interface BevezetoProps {
    title: string
    children: ReactNode;
}

export interface LablecProps {
    nev: string;
    datum: Date;
}

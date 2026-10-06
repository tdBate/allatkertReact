import type { AllatCardProps } from "../types/types";

export function AllatCard(props: { lista: AllatCardProps }) {
    return (
        <>
            <div className="col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100">
                <h2>{props.lista.fajta}</h2>

                <div className="card">
                    <div className="card-body">
                        <h3>{props.lista.nev}</h3>
                        <p>{props.lista.nev} egy {props.lista.eletkor} éves {props.lista.fajta}. Súlya körübelül {props.lista.suly} kg</p>
                        <p>Veszélyeztetett: {props.lista.veszelyeztetett ? "igen" : "nem"}</p>
                        <p>Kedvenc ételek: {props.lista.kedvenc_etelek.join(", ")}</p>
                    </div>
                </div>
            </div>
        </>)
}
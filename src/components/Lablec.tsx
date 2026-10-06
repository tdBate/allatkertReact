import type { LablecProps } from "../types/types";

export function Lablec(props: LablecProps) {
    return (
        <>
            <footer className="text-center">
                <p><b>Az oldalt készítette:</b> {props.nev}</p>
                <p><b>A készítés dátuma: </b>{props.datum.toLocaleDateString("hu-HU")}</p>
            </footer>
        </>)
}
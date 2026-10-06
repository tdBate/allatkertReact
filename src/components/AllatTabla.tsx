import type { Allat, AllatTablaProps } from "../types/types";

function AllatTabla(props: AllatTablaProps) {
    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <th>Név</th>
                    <th>Életkor</th>
                    <th>Súly</th>
                    <th>Veszélyeztetett</th>
                    <th>Kedvenc ételek</th>
                </thead>

                <tbody>
                    {props.lista.map((item: Allat) => (
                        <tr>
                            <td>{item.nev}</td>
                            <td>{item.eletkor}</td>
                            <td>{item.suly}</td>
                            <td>{item.veszelyeztetett ? "igen" : "nem"}</td>
                            <td>{item.kedvenc_etelek.join(" ,")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>)
}

export default AllatTabla;
import Row from "./row"

export default function Table({ data }) {
    return (
        <table className="mx-auto">
            <tbody>
                {data.map((row, i) => (
                    <Row key={i} images={row} />
                ))}
            </tbody>
        </table>
    )
}

import Cell from "./cell"

export default function Row({ images }) {
    return (
        <tr>
            {images.map((src, i) => (
                <Cell key={i} src={src} />
            ))}
        </tr>
    )
}

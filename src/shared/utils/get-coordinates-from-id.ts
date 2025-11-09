export function getCoordinatesFromId(id: string) {
    const row = parseInt(id.split('-')[0]);
    const col = parseInt(id.split('-')[1]);

    return { row, col };
}
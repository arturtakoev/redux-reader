export default function initState(sources, selected = {}, bool) {
    Object.values(sources).map((value) => {
        return Object.assign({}, selected[value.title] = {
            isSelected: bool,
            properties: value
        })
    })
    return selected
}
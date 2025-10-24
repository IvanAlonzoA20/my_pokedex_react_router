export function metaInfo(title: string, description: string) {
    return [
        { title: `Exsoriopolis - ${title}` },
        { name: "description", content: description },
    ];
}
const genres: Record<string, string> = {
    fantasy: "Фентези",
    horror: "Ужасы",
    action: "Боевик",
    comedy: "Комедия"
}

export const useRUGenre = (enGenre: string | undefined) => {
    if (!enGenre) {
        return;
    }

    return genres[enGenre];
}
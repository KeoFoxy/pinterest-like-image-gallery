export function loadFromLocalStorage() {
    if (typeof window !== "undefined") {
        const savedState = localStorage.getItem("galleryState");
        if (savedState) {
            return JSON.parse(savedState);
        }
    }
    return undefined;
}

export function saveToLocalStorage(state: any) {
    if (typeof window !== "undefined") {
        localStorage.setItem("galleryState", JSON.stringify(state));
    }
}

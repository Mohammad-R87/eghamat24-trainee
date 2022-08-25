export const loadState = () => {
    try {
        const data = localStorage.getItem('missions');
        if (data === null) {
            return undefined;
        }
        return JSON.parse(data);
    } catch (error) {
        return undefined;
    }
}

export const saveState = state => {
    try {
        const data = JSON.stringify(state);
        localStorage.setItem('missions', data);
    } catch (error) {
        console.log(error);
    }
}
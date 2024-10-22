export const getImagURL = (path) => {
    return new URL(`../assets/${path}`, import.meta.url).href;
};

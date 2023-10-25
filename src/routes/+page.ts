export const load = async ({fetch}) => {
    return {
        data: fetch("https://dummyjson.com/products").then(res => res.json())
    }
};
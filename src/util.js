export const getInput = async (file) => {
    const response = await fetch(file);
    const text = await response.text();
    return text.split('\n');
}


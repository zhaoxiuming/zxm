function setRem(designWidth, baseSize) {
    const scale = document.documentElement.clientWidth / designWidth;
    document.documentElement.style.fontSize = `${baseSize * scale}px`;
}
export default setRem
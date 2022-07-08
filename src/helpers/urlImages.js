export const urlImages = (urlImg) => {
   return new URL(`../../assets/${urlImg}`, import.meta.url).href;
}
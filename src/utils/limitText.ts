export const limitText = (text: string, maxLength: number = 30) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }

  return text;
}
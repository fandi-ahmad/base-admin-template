const formatNumberToK = (value: number) => {
  if (value >= 1000) {
    return '+' + (value / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }

  if (value == 0) {
    return null
  }
  
  return '+' + value.toString();
}

export default formatNumberToK
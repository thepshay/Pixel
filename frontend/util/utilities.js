export function changeToTitle(str) {
  const words = str.split('-');
  return words.map(word => {
    return capitalize(word)
  }).join(' ');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
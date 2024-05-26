export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
}


export function getRandomLetter() {
  const letters = ['', 'B', 'C'];
  const randomIndex = Math.floor(Math.random() * letters.length);
  return letters[randomIndex];
}
export const RandomId = (l = 12) =>
  [...Array(l)].map((i) => (~~(Math.random() * 36)).toString(36)).join("");

export const RandomString = (l = 1) => {
  const chars = 'aábcčdďeéěfghiíjklmnňoópqrřsštťuúvwxyýzž';
  return [...Array(l)].map(() => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
}

export const RandomStringX = (l = 6, type) => {
  let chars = type ? 'aábcčdďeéěfghiíjklmnňoópqrřsštťuúvwxyýzž' : 'abcdefghijklmnopqrstuvwxyz';
  return [...Array(l)].map(() => {
    const char = chars.charAt(Math.floor(Math.random() * chars.length));
    chars = chars.replace(char,'');
    return char;
  }).join('');
}

export const PexesoContent = (l = 6, type) => {
  let s = RandomStringX(l, type);
  s = s + s.toUpperCase();
  return [...s].map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export const PexesoImage = (prev) => {
  return bgImages.filter(img => img !== prev)[Math.floor(Math.random() * bgImages.filter(img => img !== prev).length)];
}

const bgImages = [
  'image001.jpg',
  'image002.webp',
  'image003.jpg',
  'image004.jpg',
  'image005.jpg',
  'image006.jpg',
  'image007.jpg',
  'image008.jpg',
  'image009.webp',
  'image010.webp',
  'image011.webp',
  'image012.webp',
  'image013.webp',
  'image014.webp',
  'image015.webp',
  'image016.webp',
  'image017.webp',
  'image018.webp',
  'image019.webp',
  'image020.webp',
  'image021.webp',
  'image022.webp',
  'image023.webp',
  'image024.jpg',
  'image025.jpg',
  'image026.jpg',
  'image027.jpg',
  'image028.jpeg',
  'image029.jpg',
  'image030.jpg',
  'image031.jpg',
  'image032.jpg',
  'image033.jpg',
  'image034.jpg',
  'image035.webp',
  'image036.webp',
  'image037.jpg',
];
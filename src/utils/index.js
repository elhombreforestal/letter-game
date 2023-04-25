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

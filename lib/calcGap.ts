const calcGap = iconWidth => {
  const w = Number(iconWidth.slice(0, 2));
  const d = 20 - w;
  const gap = 18 + d;
  return `${gap}px`;
};

export default calcGap;

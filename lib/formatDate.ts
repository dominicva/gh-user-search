const formatDate = dateString => {
  const date = new Date(dateString).toDateString();
  const arr = date.split(' ');

  const pt1 = arr.slice(1, -1).reverse();
  const pt2 = arr.at(-1);

  return [...pt1, pt2].join(' ');
};

export default formatDate;

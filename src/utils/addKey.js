export default data => {
  return data.map(item => {
    item.key = item._id;
    return item;
  });
};

export default width => {
  return {
    title: "",
    dataIndex: "image",
    width,
    render(image) {
      return {
        props: {
          style: {
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }
        }
      };
    }
  };
};

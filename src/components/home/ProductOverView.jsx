const overviewCategory = [
  {
    img: "https://img.freepik.com/free-photo/new-smartphone-balancing-with-pebbles_23-2150296459.jpg?size=626&ext=jpg",
    _id: "a86fpoa9f",
    label: "",
  },
  {
    img: "https://img.freepik.com/free-photo/new-smartphone-balancing-with-pebbles_23-2150296459.jpg?size=626&ext=jpg",
    _id: "a86fpoaffa9f",
    label: "",
  },
  {
    img: "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437101.jpg?w=1060&t=st=1703392780~exp=1703393380~hmac=98229db60697c2778ac46e3f0046230de9e489b63eea7f735c8fe7c10e00ca43",
    _id: "a86fpads2oa9f",
    label: "",
  },
  {
    img: "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437132.jpg?1&t=st=1703392770~exp=1703393370~hmac=d68796cc22f195e11e25cbdc0510d1015728eef2873833f589459015bff25db3",
    _id: "a86fp23oa9f",
    label: "",
  },
  {
    img: "https://img.freepik.com/free-photo/electronic-device-balancing-concept_23-2150422322.jpg?w=900&t=st=1703392861~exp=1703393461~hmac=dbd8f1971625a38b055ace17ae23f979880d16798e45780d04b643d9e0383a52",
    _id: "aad86fpoa9f",
    label: "",
  },
];

const ProductOverView = () => {
  return (
    <section className="mt-32 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-10">
        {overviewCategory?.map(({ img, _id, label }) => (
          <figure key={_id} className="w-full h-full">
            <img
              className="cover min-h-44 hover:border-2 hover:border-black transition delay-10 ease-in border-2 border-white"
              src={img}
              alt={label}
            />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default ProductOverView;

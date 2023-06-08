const promoslides = () => {
  return <div></div>;
};

export default promoslides;

export const getServerSideProps = async () => {
  return {
    redirect: {
      permanent: false,
      destination: "https://investordeck.zigamonsters.com/",
    },
    props: {},
  };
};

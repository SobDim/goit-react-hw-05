import { MutatingDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="deepskyblue"
        secondaryColor="yellow"
        radius="18.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;

import { SunspotLoader } from 'react-awesome-loaders';

const MovieLoader = () => {
  return (
    <div className={'flex justify-center pt-24'}>
      <SunspotLoader
        gradientColors={['#545151', '#E0E7FF']}
        shadowColor={'#1b1b1c'}
        desktopSize={'128px'}
        mobileSize={'100px'}
      />
    </div>
  );
};

export default MovieLoader;

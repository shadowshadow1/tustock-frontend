import Image from 'next/image';
import logo from './logo.png';

const Logo = () => {
  return (
    <Image src={logo} alt="Logo" width={100} height={100} />
  );
};

export default Logo;


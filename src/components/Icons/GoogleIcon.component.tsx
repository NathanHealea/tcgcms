import classNames from 'classnames';
import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

interface GoogleIconProps extends Omit<ImageProps, 'src' | 'alt'> {}

const GoogleIcon: FC<GoogleIconProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <div
      className={classNames([
        'w-4 h-4',
        'flex justify-center items-center',
        className,
      ])}
    >
      <Image
        src='/images/icons/google-icon.png'
        alt='Google G Icon'
        width='512'
        height='512'
      />
    </div>
  );
};

export default GoogleIcon;

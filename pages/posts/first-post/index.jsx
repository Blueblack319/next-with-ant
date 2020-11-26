import React from 'react';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './styles.module.scss';

const FirstPost = () => {
  const router = useRouter();

  const handleButtonClicked = (e) => {
    router.push('/');
  };

  return (
    <>
      <Button onClick={handleButtonClicked}>Push to home</Button>
      <Link href='/'>
        <a>Link to home</a>
      </Link>
    </>
  );
};

export default FirstPost;

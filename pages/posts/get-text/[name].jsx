import path from 'path';
import { useRouter } from 'next/router';

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { name: 'hello' } }, { params: { name: 'world' } }],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const fs = require('fs');

  const text = fs.readFileSync(
    path.join(process.cwd(), '/public/robots.txt'),
    'utf8',
  );

  return {
    props: {
      text,
    },
  };
};

const GetText = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return <div>Dynamic Text:{props.text}</div>;
};

export default GetText;

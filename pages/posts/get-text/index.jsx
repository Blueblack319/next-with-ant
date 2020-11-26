import path from 'path';

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
  return <div>Dynamic Text:{props.text}</div>;
};

export default GetText;

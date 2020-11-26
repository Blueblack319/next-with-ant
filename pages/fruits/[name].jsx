import { useRouter } from 'next/router';

const Posts = () => {
  const router = useRouter();

  return (
    <div>
      Hello
      {router.query.name?.map((name) => (
        <div key={name}>{name}</div>
      ))}
    </div>
  );
};

export default Posts;

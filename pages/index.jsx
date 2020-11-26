import axios from 'axios';
import Link from 'next/link';
import path from 'path';
import { SmileFilled } from '@ant-design/icons';
import { List, Avatar } from 'antd';
import { getSortedPostsData } from '../lib/post';

const content = {
  marginTop: '100px',
};

export const getStaticProps = async (content) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }) {
  return (
    <div style={content}>
      <div className='text-center mb-5'>
        <Link href='/posts/get-text'>
          <a className='logo mr-0'>
            <SmileFilled size={48} strokeWidth={1} />
          </a>
        </Link>

        <p className='mb-0 mt-3 text-disabled'>Welcome to the world !</p>
      </div>

      <List
        itemLayout='vertical'
        dataSource={allPostsData}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
              }
              title={<a href='https://ant.design'>{item.title}</a>}
            />
            <div>{item.date}</div>
            <div>{item.id}</div>
          </List.Item>
        )}
      />
    </div>
  );
}

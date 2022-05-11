import Layout from '../components/layout';
import FeedHero from '../components/feed_hero';
import MessageBoard from '../components/message_board';

export default function Feed() {
  return (
    <Layout>
      <FeedHero />
      <MessageBoard />
    </Layout>
  );
}

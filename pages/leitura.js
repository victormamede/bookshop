import HeroRead from '../components/hero_read';
import Layout from '../components/layout';
import ReadingList from '../components/reading_list';

export default function Home() {
  return (
    <Layout>
      <HeroRead />
      <ReadingList />
    </Layout>
  );
}

import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';

export function Layout({ children }: { children: React.ReactElement | null }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

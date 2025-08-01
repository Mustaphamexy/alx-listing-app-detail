import Header from "./Header";
import Footer from "./Footer";
import { CardProps } from '../../interfaces';

const Layout: React.FC<CardProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
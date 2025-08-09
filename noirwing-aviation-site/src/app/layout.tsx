
import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Noirwing Aviation — Global Aircraft Brokerage',
  description: 'Noirwing Aviation brokers aircraft worldwide with a luxury experience.',
  openGraph: { title: 'Noirwing Aviation', description: 'Global aircraft brokerage with a luxury experience.' }
};

export default function RootLayout({ children }:{ children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}


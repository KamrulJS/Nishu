import generateStylesheetObject from '@/common/generateStylesheetsObject';
import HomePersonal from '@/app/home-personal/page';

export const metadata = {
  title: 'Mainul Ahasan Nishu — Digital Marketer | SEO & Meta Ads',
  description: 'Mainul Ahasan Nishu — Digital Marketing Team Manager in Dhaka. SEO, AEO/GEO, Meta Ads, GA4 & campaign optimization.',
  icons: {
    icon: '/assets/imgs/favicon.ico',
    shortcut: '/assets/imgs/favicon.ico',
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css',
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
    ]),
  },
};

export default function Home() {
  return (
    <HomePersonal />
  );
}

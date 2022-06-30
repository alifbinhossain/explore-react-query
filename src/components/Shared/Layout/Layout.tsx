import Link from 'next/link';
import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <div className='bg-gray-700 py-6'>
        <nav className='container flex items-center justify-center gap-x-6'>
          <Link href='/'>Home</Link>
          <Link href='/heroes'>Heroes</Link>
          <Link href='/query-heroes'>Query Home</Link>
        </nav>
      </div>

      {children}
    </div>
  );
};

export default Layout;

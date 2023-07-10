import React from 'react';
import Link from 'next/link';

function ScreenSaverIndexPage() {
  return (
    <>
      <h1>Choose your color:</h1>
      <ul>
        <li>
          <Link href="/exercises/01-screensaver/red">Red</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/blue">Blue</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/yellow">Yellow</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/green">Green</Link>
        </li>
      </ul>
    </>
  );
}

export default ScreenSaverIndexPage;

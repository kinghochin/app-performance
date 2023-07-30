import Link from 'next/link';

const Menu: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/code-split">Code Spliting</Link>
        </li>
        <li>
          <Link href="/memo-component">Memo Component</Link>
        </li>
        {/* Add more menu items as needed */}
      </ul>
    </nav>
  );
};

export default Menu;

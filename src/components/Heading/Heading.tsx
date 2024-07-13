interface Props {
  children: React.ReactNode;
  level: 1 | 2 | 3;
}

const Header: React.FC<Props> = ({ children, level }) => {
  switch (level) {
    case 1:
      return <h1 className="text-h1 font-bold mt-4 mb-6">{children}</h1>;
    case 2:
      return <h2 className="text-h2 font-bold mt-4 mb-6">{children}</h2>;
    case 3:
      return <h3 className="text-h3 font-bold mt-4 mb-6">{children}</h3>;
  }
};

export default Header;

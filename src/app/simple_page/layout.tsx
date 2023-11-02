

export default function RootLayout({ children, params }) {
  const url = process.env.API_SERVER;

  return (
        <div className={'container'}>    {children}</div>

    );
}

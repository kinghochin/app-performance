import Menu from '../Menu/Menu';

export default function RootLayout({
	children,
  }: {
	children: React.ReactNode
  }) {
	return (
	  <html lang="en">
		<body>
		  <Menu />
		  {children}
		</body>
	  </html>
	)
  }
import RootLayout from '../components/RootLayout/RootLayout';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootLayout>
      {children}
    </RootLayout>
  )
}

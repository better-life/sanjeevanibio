import '../styles/globals.css'
import MainLayout from '../components/layouts/Main'

const EmptyLayout = ({ children }) => {
  return <>{children}</>
}
function MyApp ({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp

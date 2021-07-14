import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";
import "reset-css/reset.css";
import "../styles/app.scss";
import MainLayout from "../layouts/MainLayout";

const apiUrl = process.env.NEXT_PUBLIC_API_URL
  ? process.env.NEXT_PUBLIC_API_URL
  : "http://localhost:5000/graphql";

const client = new ApolloClient({
  uri: apiUrl,
  cache: new InMemoryCache(),
});

function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  );
}

export default App;

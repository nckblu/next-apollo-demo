import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";
import "reset-css/reset.css";
import "../styles/app.scss";
import MainLayout from "../layouts/MainLayout";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
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

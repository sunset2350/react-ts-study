import Counter from "./components/Counter";
import Layout from "./components/Layout";
import Todo from "./components/todo/Todo";
import WelcomeMessage from "./components/WelcomeMessage";
import Post from "./components/Post";

const App = () => {
  return (
    <>
      <Counter />
      <hr />
      <Todo />
      <hr />
      <Layout title="Home Page">
        {/* children 속성을 안쪽 태그에 */}
        <WelcomeMessage name="Alice" />
        <p>Welcome to our website!</p>
      </Layout>
      <Post></Post>
    </>
  );
};

export default App;

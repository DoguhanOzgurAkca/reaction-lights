import Meta from "@/components/og-tags/og-tags";
import ReactionLights from "../components/reaction";
function App() {
  return (
    <div className="App">
      <ReactionLights />
      <Meta
        title="Home Page Title"
        description="This is the description for the home page."
        url="https://www.example.com"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/F1_chequered_flag.svg/1024px-F1_chequered_flag.svg.png"
      />
    </div>
  );
}

export default App;

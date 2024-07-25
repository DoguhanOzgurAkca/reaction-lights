// src/app/page.js
import OGTags from "@/components/og-tags/og-tags";
import ReactionLights from "../components/reaction";

const HomePage = () => {
  return (
    <>
      <OGTags
        title="Home Page Title"
        description="Description of the home page"
        image="https://example.com/homepage-image.jpg" // Replace with actual image URL
      />
      <div className="App">
        <ReactionLights />
      </div>
    </>
  );
};

export default HomePage;

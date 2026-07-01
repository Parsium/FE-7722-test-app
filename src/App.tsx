// Carbon imports from PR assets
import Box from "carbon-react/lib/components/box";

// Carbon v159.3.0 imports
import OldBox from "carbon-react-older/lib/components/box";

const App = () => (
  <div
    style={{
      display: "flex",
      gap: "1rem",
      flexDirection: "column",
      width: "320px",
    }}
  >
    <h1 style={{ margin: 0 }}>FE-7722 test app</h1>
    <p style={{ margin: 0 }}>
      Inspect the following boxes using the browser dev tools. The class name of
      cyan box should be prefixed with the package version. The class name of
      salmon box should not.
    </p>
    <Box
      backgroundColor="cyan"
      height="10em"
      width="10em"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      Latest
    </Box>
    <OldBox
      backgroundColor="salmon"
      height="10em"
      width="10em"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      Old
    </OldBox>
  </div>
);

export default App;

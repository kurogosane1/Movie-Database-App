import { useHistory } from "react-router-dom";
import { GoBack } from "../styles";
function WrongPage() {
  let history = useHistory();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <img
        src={process.env.REACT_APP_NETFLIX_NOT_FOUND_MEME}
        style={{ height: "200px", marginBottom: "20px" }}
      />
      <h2 style={{ marginBottom: "20px", fontFamily: "Open Sans" }}>
        No Such page found
      </h2>
      <GoBack onClick={() => history.push("/")}>Go Back</GoBack>
    </div>
  );
}

export default WrongPage;

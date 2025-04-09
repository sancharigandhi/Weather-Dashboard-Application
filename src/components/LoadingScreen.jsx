import loadingGif from "../assets/loading.gif";
export default function LoadingScreen() {
  return (
    <div className="sub-container loading-container active">
      <img src={loadingGif} width="150" height="150" alt="Loading" />
      <p>Loading</p>
    </div>
  );
}

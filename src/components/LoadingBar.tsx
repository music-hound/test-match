interface LoadingBarProps {
  isLoading: boolean;
  isFetching: boolean;
}

const LoadingBar = ({ isLoading, isFetching }: LoadingBarProps) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "4px",
        background: "#43AD28",
        transition: "opacity 0.3s ease",
        opacity: isLoading || isFetching ? 1 : 0,
      }}
    />
  );
};

export default LoadingBar;

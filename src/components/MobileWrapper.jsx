import "./MobileWrapper.css";

export default function MobileWrapper({ children }) {
  return (
    <div className="screen">
      <div className="mobile">
        {children}
      </div>
    </div>
  );
}

import MobileWrapper from "../components/MobileWrapper";
import "./Profile.css";

export default function Profile() {
  return (
    <MobileWrapper>
      <div className="profile">

        {/* Card 1 — Account Settings */}
        <div className="settings-card">
          <div className="profile-header">Account Settings</div>
        </div>

        {/* Card 2 — Profile Info */}
        <div className="profile-card-wrapper">

          <div className="profile-card">
            <div style={{ position: "relative" }}>
              <img
                className="profile-avatar"
                src="https://i.pravatar.cc/100"
                alt="User profile"
              />
              <div className="profile-avatar-badge">🔒</div>
            </div>

            <div className="profile-info">
              <h4 className="profile-name">Marry Doe</h4>
              <p className="profile-email">Marry@gmail.com</p>
            </div>
          </div>

          <p className="profile-bio">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat.
          </p>

        </div>

      </div>
    </MobileWrapper>
  );
}

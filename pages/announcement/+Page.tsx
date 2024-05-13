import "./code.css";
import Announcement from "../../src/components/Announcement";

export { Page };

function Page() {
  return (
    <>
      <h1>Announcement</h1>

      <Announcement
        ariaAnnouncementTitle="Announcement"
        announcements={["one announcement"]}
      />
    </>
  );
}

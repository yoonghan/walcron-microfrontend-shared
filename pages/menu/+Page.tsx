import Menu from "../../src/components/Menu";
import React from "react";

export { Page };

function Page() {
  const MenuLink = (
    text: string,
    href: string,
    role: "menuitem",
    onClick?: () => void
  ) => (
    <a
      href={href}
      role={role}
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
      }}
    >
      {text}
    </a>
  );

  const HomeLink = (
    text: string,
    href: string,
    onClick: () => void,
    tabIndex: number
  ) => (
    <a
      href={href}
      tabIndex={tabIndex}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {text}
    </a>
  );

  const HomeLogoLink = (helperClassName: string) => (
    <a
      href={"/"}
      className={helperClassName}
      onClick={(e) => e.preventDefault()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
      </svg>
    </a>
  );

  return (
    <header>
      <Menu
        menuLink={MenuLink}
        homeLink={HomeLink}
        homeLogoLink={HomeLogoLink}
        model={[
          {
            label: "Visitor Info",
            url: "/visitor-info",
            items: [
              {
                label: "Opening Hours And Rates",
              },
              {
                label: "Getting There",
                url: "/visitor-info/getting-there",
              },
              {
                label: "Zoo Map",
                url: "/visitor-info/zoo-map",
              },
              {
                label: "Kiosks And Facilities",
                url: "/visitor-info/kiosks-n-facilities",
              },
            ],
          },
          {
            label: "About Zoo",
            url: "/about-us",
          },
          {
            label: "Have An Event",
            url: "/have-an-event",
            items: [
              {
                label: "Birthday",
                url: "/have-an-event/birthday",
              },
              {
                label: "Family Day",
                url: "/have-an-event/family-day",
              },
              {
                label: "Scenic Point & Function",
                url: "#scenic-point-and-function",
              },
              {
                label: "Kancil Hall",
                url: "#kancil-hall",
              },
              {
                label: "Tunku Abdul Rahman Theather",
                url: "#tunku-abdul-rahman-theater",
              },
            ],
          },
          {
            label: "Get Involved",
            url: "/get-involved",
            items: [
              {
                label: "Adopt Our Animals",
                url: "/get-involved/adopt-our-animal",
              },
              {
                label: "List Of Donors And Sponsors",
                url: "/get-involved",
              },
              {
                label: "KeeperKu Programme",
                url: "/get-involved",
              },
              {
                label: "Student Training",
                url: "/get-involved",
              },
              {
                label: "CSR Programme",
                url: "/get-involved",
              },
            ],
          },
        ]}
        mobileHomeText="Zoo Negara Malaysia"
        shortcutComponent={<button>+ Buy Now</button>}
      ></Menu>
    </header>
  );
}

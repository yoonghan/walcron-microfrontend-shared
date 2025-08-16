import Menu from "../../src/components/Menu"

export { Page }

const PageMenuLink = (text: string, href: string, onClick?: () => void) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault()
      if (onClick) onClick()
    }}
  >
    {text}
  </a>
)

const PageHomeLink = (href: string, onClick: () => void, tabIndex: number) => (
  <a
    href={href}
    tabIndex={tabIndex}
    onClick={(e) => {
      e.preventDefault()
      onClick()
    }}
  >
    Zoo Negara Malaysia
  </a>
)

const HomeLogoLink = (helperClassName: string) => (
  <a href={"/"} className={helperClassName} onClick={(e) => e.preventDefault()}>
    Home
  </a>
)

function Page() {
  return (
    <header>
      <Menu
        menuLink={PageMenuLink}
        homeLink={PageHomeLink}
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
            label: "Event",
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
        shortcutComponent={<button>+ Buy Now</button>}
      ></Menu>
    </header>
  )
}

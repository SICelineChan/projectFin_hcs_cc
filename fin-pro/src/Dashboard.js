import PlaceCards from "./PlaceCards";
import SideBarMenu from "./SideBarMenu";
import TopMenu from "./TopMenu";

export default function Dashboard() {
  const menu = [
    { text: "Home", aim: "home" },
    { text: "Locations", aim: "locations" },
    { text: "Dashboard", aim: "dashboard" },
    { text: "About Me", aim: "about" },
    { text: "Contact", aim: "contact" },
  ];
  return (
    <div>
      <div className="d-flex flex-column">
        <TopMenu title="Eat Noodles Go Travel!"></TopMenu>
        <SideBarMenu menu={menu} />
        <PlaceCards></PlaceCards>
      </div>
    </div>
  );
}

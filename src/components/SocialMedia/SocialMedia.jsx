import { Link } from "react-router-dom";

const SocialMedia = () => {
  const socialLinks = [
    {
      id: "soc1",
      name: "Instagram",
      href: {
        pathname: "https://instagram.com/lovejamaicaltd?igshid=YmMyMTA2M2Y="
      }
    },
    {
      id: "soc2",
      name: "Facebook",
      href: {
        pathname: "https://www.facebook.com/profile.php?id=100080189571334"
      }
    },
    {
      id: "soc3",
      name: "ETSY",
      href: {
        pathname:
          "https://www.etsy.com/uk/shop/WayoutDesign?ref=simple-shop-header-name&listing_id=1185767816"
      }
    }
  ];

  return (
    <div className="SocialMedia">
      {socialLinks.map((link) => {
        return (
          <Link className="socLink" to={link.href} target="_blank">
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialMedia;

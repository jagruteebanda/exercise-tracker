// "use client";
// import { Card } from "@mui/material";
// import styles from "./styles/Footer.module.scss";
// import { useRouter } from "next/navigation";

// const bottomNavBarData = [
//   {
//     name: "home",
//     icon: "",
//     href: "/",
//   },
//   {
//     name: "exercise",
//     icon: "",
//     href: "/exercise",
//   },
//   //   {
//   //     name: "home",
//   //     icon: "",
//   //     href: "/",
//   //   },
// ];

// export const Footer = () => {
//   const router = useRouter();

//   const handleNavigation = (href) => {
//     router.push(href);
//   };

//   return (
//     <div className={styles.footerContainer}>
//       {bottomNavBarData.map((button) => (
//         // <Link href={button.href}>
//         <div onClick={() => handleNavigation(button.href)}>
//           <Card
//             sx={{
//               display: "flex",
//               backgroundColor: "black",
//               border: "1px solid #e6e6e6",
//               margin: "0.5rem",
//               flex: `calc(100% / ${bottomNavBarData.length})`,
//             }}
//           >
//             <span
//               style={{
//                 color: "white",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 width: "100%",
//               }}
//             >
//               {button.name}
//             </span>
//           </Card>
//         </div>
//         // </Link>
//       ))}
//     </div>
//   );
// };

import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  // const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0, left: 0 }}>
      <BottomNavigation
        showLabels
        value={0}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default Footer;

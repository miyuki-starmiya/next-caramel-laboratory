import * as React from "react";
import Link from 'next/link';
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { amber, pink } from "@mui/material/colors";

// styles
const StyledTabs = styled(Tabs)({ backgroundColor: amber[100], });
const StyledTab = styled(Tab)({
  color: amber[800],
  "&:hover": {
    color: pink[500],
    backgroundColor: pink[50],
    borderBottom: "2px solid pink",
  }
});

// data
const data = [
  { value: "/", label: "ホーム" },
  { value: "/info", label: "新着情報" },
  { value: "/accessory", label: "桜貝アクセサリー" },
  { value: "earring", label: "ピアス*イアリング" },
  { value: "neckless", label: "ネックレス" },
  { value: "hair_accessory", label: "ヘアアクセサリー" },
  { value: "other", label: "雑貨" },
  { value: "contact", label: "お問い合わせ" },
];

const Navbar = () => {
  const [value, setValue] = React.useState(null);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          centered
        >
          {data.map((item, i) => {
            return (
              <Link href={item.value} key={i}>
                <StyledTab value={item.value} label={item.label} />
              </Link>
            )
          }
          )}
        </StyledTabs>

      </Box>
    </div>
  );
};

export default Navbar;

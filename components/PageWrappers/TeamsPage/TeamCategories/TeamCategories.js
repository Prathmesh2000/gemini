import React, { useState } from "react";
import styles from "./css/TeamCategories.module.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function TeamCategories(props) {
  const [selectedCategory, setSelectedCategory] = useState("Leadership");
  const categories = [
    "Leadership",
    "Business Strategy",
    "Webstack & Mobility",
    "Quality Assurance",
    "DevOps",
    "Infrastructure",
    "Development",
    "Human Resource",
  ];

  const changeCategory = (category) => {
    setSelectedCategory(category);
    props.getCategory(category);
  };

  return (
    <>
      <div className={styles.categoryWrapper}>
        {categories.map((c, i) => (
          <p
            className={`${styles.category} ${
              selectedCategory === c ? styles.selectedCategory : ""
            }`}
            onClick={() => changeCategory(c)}
          >
            {c}
          </p>
        ))}
      </div>

      <div className={styles.categoryDropdownWrapper}>
        <FormControl sx={{ minWidth: "100%" }}>
          <Select
            value={selectedCategory}
            onChange={(event) => changeCategory(event.target.value)}
            displayEmpty
            sx={{
              borderRadius: "16px",
              color: "white",
              fontFamily: "SF Pro Display",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "28px",

              "& .MuiSvgIcon-root": {
                color: "white",
              },
            }}
            className={styles.categoryDropdown}
          >
            {categories.map((c) => (
              <MenuItem value={c}>{c}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
}

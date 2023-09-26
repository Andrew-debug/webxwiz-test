"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Globe from "@/assets/icons/globe.svg";
const LanguageSelector = ({
  language,
  ukraine,
  usa,
}: {
  language: string;
  ukraine: string;
  usa: string;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const curLang = pathname.slice(1, 3) === "en" ? "en" : "uk";
  const [langDropdown, setLangDropdown] = useState(curLang);

  const handleChangeLanguage = (e: SelectChangeEvent) => {
    setLangDropdown(e.target.value as string);
    router.push(
      `${
        pathname.includes("uk")
          ? "/en" + pathname.slice(3)
          : "/uk" + pathname.slice(3)
      }`,
      { scroll: false }
    );
  };

  return (
    <div className="flex items-center gap-4">
      <div className="w-6 h-6">
        <Globe />
      </div>
      <Box sx={{ minWidth: 160 }}>
        <FormControl fullWidth>
          <InputLabel>{language}</InputLabel>
          <Select
            value={langDropdown}
            label={language}
            onChange={handleChangeLanguage}
          >
            <MenuItem value="en">{usa}</MenuItem>
            <MenuItem value="uk">{ukraine}</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default LanguageSelector;

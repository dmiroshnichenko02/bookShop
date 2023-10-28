import { FC, useState } from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import styles from "./adminPanel.module.scss";
import AuthorForm from "./authorForm/AuthorForm";
import GenreForm from "./genreForm/genreForm";
import FormatForm from "./formatForm/formatForm";
import LanguageForm from "./languageForm/languageForm";
import BookForm from "./bookForm/bookForm";

const AdminPanel: FC = () => {

    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };

  return (
    <>
      <section className={styles.admin}>
        <div className="container">
          <div className="wrapper">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Author form" value="1" />
                    <Tab label="Genre form" value="2" />
                    <Tab label="Format form" value="3" />
                    <Tab label="Language form" value="4" />
                    <Tab label="Book form" value="5" />
                  </TabList>
                </Box>
                <TabPanel value="1">{<AuthorForm/>}</TabPanel>
                <TabPanel value="2">{<GenreForm/>}</TabPanel>
                <TabPanel value="3">{<FormatForm/>}</TabPanel>
                <TabPanel value="4">{<LanguageForm/>}</TabPanel>
                <TabPanel value="5">{<BookForm/>}</TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminPanel;

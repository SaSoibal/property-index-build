import React, {useState} from "react";
import i18next from "i18next";
import {Dropdown, Menu} from 'antd';
import useLanguage from './hooks/useLanguage';
import BN from "./asstes/images/bn.png"
import EN from "./asstes/images/en.png"
import {Link} from "react-router-dom";
import {RiCheckLine} from "react-icons/ri";

const languageMap = {
  bn: { label: "বাংলা", code: "bn", active: true },
  en: { label: "English", code: "en", active: false }
};

const LanguageSelect = () => {
  const { setLanguage } = useLanguage();
  const selected = localStorage.getItem("i18nextLng") || "bn";
  const [menuAnchor, setMenuAnchor] = useState(null);
  React.useEffect(() => {
    document.body.dir = languageMap[selected].dir;
    setLanguage(selected)
  }, [menuAnchor, selected]);
  // language Change
  const language = (
      <Menu>
        {Object.keys(languageMap)?.map((item) => {
            return <Menu.Item className="language-item" key={item} onClick={() => {
                        i18next.changeLanguage(item);
                        setMenuAnchor(null);
                    }}>
                        <img className="flag-design" src={languageMap[item].code=='bn'?BN:EN}  alt={languageMap[item].code}/>
                        {languageMap[item].label}
                        {languageMap[selected].code === languageMap[item].code?<RiCheckLine />:''}
                    </Menu.Item>
           }
        )}
      </Menu>
  )
  return (
      <div className='header_to_language'>
        <Dropdown overlay={language}>
          <Link className="ant-dropdown-link" to="/" onClick={e => e.preventDefault()}>
            <img className="flag-design" src={languageMap[selected].code == 'bn' ? BN : EN} alt={selected.code}/>
            {languageMap[selected].label}
          </Link>
        </Dropdown>
      </div>
  );
};

export default LanguageSelect;

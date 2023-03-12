import {ReactComponent as HeadLogo} from '../../assets/icons/headLogo.svg'
import './MainHeader.scss'
import UIIconGroup from "../ui/uiIconGroup/UIIconGroup";
import {useWindowSize} from 'react-use';
import {ListItem} from "../../types/listItem";
import {v4} from "uuid";

function MainHeader() {
    const {width} = useWindowSize();
    const largeMenu: ListItem[] = [
        {
            id: v4(),
            name: "Услуги"
        },
        {
            id: v4(),
            name: "Виджеты"
        },
        {
            id: v4(),
            name: "Интеграции"
        },
        {
            id: v4(),
            name: "Курсы"
        },
        {
            id: v4(),
            name: "Сертификаты"
        },
    ];
    const mobileMenu: ListItem[] = largeMenu.filter(item => largeMenu.indexOf(item) !== largeMenu.length - 1);
    const menu: ListItem[] = width > 700 ? largeMenu : mobileMenu;

    return (
        <header className="header">
            <div className="header__content">
                {
                    width > 700 &&
                    <div className="header__logo">
                        <HeadLogo/>
                    </div>

                }

                <div className="header__menu">
                    <ul className="header__menu-list">
                        {
                            menu.map(item =>
                                (
                                <li className="header__menu-list-item" key={item.id}>
                                    {item.name}
                                </li>

                            ))
                        }
                    </ul>
                </div>

                {
                    width > 700 &&
                    <div className="header__contacts">
                        <span className="header__contacts-number">+7 555 555-55-55</span>
                        <UIIconGroup/>
                    </div>
                }
            </div>

            {
                width > 700 &&
                <div className="header__subtitle">
                    <p>
                        крупный интегратор CRM в Росcии и ещё 8 странах
                    </p>
                </div>
            }
        </header>
    )
}

export default MainHeader
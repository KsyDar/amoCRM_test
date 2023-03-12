import {ListItem} from "../../types/listItem";
import {v4} from 'uuid'
import UIList from "../ui/uiList/UIList";
import './MainFooter.scss'
import {useWindowSize} from "react-use";

function MainFooter() {
    const aboutList: ListItem[] = [
        {
            id: v4(),
            name: "Партнерская программа"
        },
        {
            id: v4(),
            name: "Вакансии"
        },
    ]
    const menuList_1: ListItem[] = [
        {
            id: v4(),
            name: "Расчет стоимости",
        },
        {
            id: v4(),
            name: "Услуги",
        },
        {
            id: v4(),
            name: "Виджеты",
        },
        {
            id: v4(),
            name: "Интеграции",
        },
        {
            id: v4(),
            name: "Наши клиенты",
        },
    ]
    const menuList_2: ListItem[] = [
        {
            id: v4(),
            name: "Благодарственные письма",
        },
        {
            id: v4(),
            name: "Кейсы",
        },
        {
            id: v4(),
            name: "Сертификаты",
        },
        {
            id: v4(),
            name: "Блог на YouTube",
        },
        {
            id: v4(),
            name: "Вопрос / Ответ",
        },
    ]
    const contactList: ListItem[] = [
        {
            id: v4(),
            name: "+7 555 555 55 55",
        },
        {
            id: v4(),
            name: "",
            icons: true,
        },
        {
            id: v4(),
            name: "Москва, Путевой проезд 3с1, к 902",
        },
    ]

    const { width } = useWindowSize();

    function Menu() {
        if (width > 700 && width <= 950) {
            return (
                <>
                    <UIList items={menuList_1} />
                    <UIList title="МЕНЮ" items={menuList_2} />
                </>
            )
        } else {
            return (
                <>
                    <UIList title="МЕНЮ" items={menuList_1} />
                    <UIList items={menuList_2} />
                </>
            )
        }
    }

    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__content-about">
                    <UIList title="О КОМПАНИИ" items={aboutList} />
                </div>
                <div className="footer__content-menu">
                    <Menu/>
                </div>
                <div className="footer__content-contacts">
                    <UIList  title="КОНТАКТЫ" items={contactList} icons={true} />
                </div>
            </div>
            <div className="footer__mark">
                <p>©WELBEX 2022. Все права защищены.</p>
                <p className="footer__mark-item">Политика конфиденциальности</p>
            </div>
        </footer>
    )
}

export default MainFooter
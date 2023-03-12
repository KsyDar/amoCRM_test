import './MainContent.scss'
import {Article} from "../../types/listItem";
import {v4} from "uuid";
import UIArticle from "../ui/uiArticle/UIArticle";
import {useWindowSize} from "react-use";

function MainContent() {
    const {width} = useWindowSize();

    const screenList: Article[] = [
        {
            id: v4(),
            title: "ВИДЖЕТЫ",
            text: "30 готовых решений",
        },
        {
            id: v4(),
            title: "DASHBOARD",
            text: "с показателями вашего бизнеса",
        },
        {
            id: v4(),
            title: "SKYPE АУДИТ",
            text: "отдела продаж и CRM системы",
        },
        {
            id: v4(),
            title: "35 ДНЕЙ",
            text: "использования CRM",
        },
    ]
    const mobileList: Article[] = [
        {
            id: v4(),
            title: "SKYPE АУДИТ",
            text: "30 готовых решений",
        },
        {
            id: v4(),
            title: "30 ВИДЖЕТОВ",
            text: "с показателями вашего бизнеса",
        },
        {
            id: v4(),
            title: "DASHBOARD",
            text: "отдела продаж и CRM системы",
        },
        {
            id: v4(),
            title: "МЕСЯЦ AMOCRM",
            text: "использования CRM",
        },
    ]
    const articleList: Article[] = width > 700 ? screenList : mobileList

    return (
        <main className="main">
            <div className="main__title">
                <h1>Зарабатывайте больше</h1>
                <h1 className="main__title--gradient">c WELBEX</h1>
                <p className="main__subtitle">Развиваем и контролируем продажи за вас</p>
            </div>
            <div className="main__description">
                <h1 className="main__description-title">
                    Вместе с <span className="main__description-title--gradient">БЕСПЛАТНОЙ </span>
                    <span className="main__description-title--gradient">КОНСУЛЬТАЦИЕЙ </span>
                    мы дарим:
                </h1>
                <ul className="main__description-list">
                    {
                        articleList.map(article => (
                            <li key={article.id}>
                                <UIArticle title={article.title} text={article.text}/>
                            </li>
                        ))
                    }
                </ul>

                {
                    width > 700 &&
                    <button className="main__description-button">Получить консультацию</button>
                }
            </div>
        </main>
    )
}

export default MainContent
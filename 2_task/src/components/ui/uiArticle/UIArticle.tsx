import './UIArticle.scss'
import {useWindowSize} from "react-use";
import {ReactComponent as MarkIcon} from "../../../assets/icons/markIcon.svg"

type PropType = {
    title: string;
    text: string;
}

function UIArticle(props: PropType) {
    const {width} = useWindowSize();
    return (
        <article className="ui-article">
            <h2 className="ui-article__title">
                {
                    width <= 700 &&
                    <MarkIcon/>
                }
                {props.title}
            </h2>
            {
                width > 700 &&
                <p className="ui-article__text">{props.text}</p>
            }
        </article>
    )
}

export default UIArticle
import {ListItem} from "../../../types/listItem";
import "./UIList.scss"
import UIIconGroup from "../uiIconGroup/UIIconGroup";

type PropType = {
    title?: string;
    items: ListItem[];
    icons?: boolean;
}

function UIList(props: PropType) {
    const itemStyle: string = props.icons ? "ui-list__item ui-list__item--nomargin" : "ui-list__item";
    const wrapperStyle: string = props.icons ? "ui-list-wrapper ui-list-wrapper--end" : "ui-list-wrapper";
    const flexStyle: string = props.icons ? "ui-list ui-list--end" : "ui-list";

    return (
        <div className={wrapperStyle}>
            <span className="ui-list__title">{props.title}</span>
            <ul className={flexStyle}>
                {
                    props.items.map(item => (
                        <li key={item.id} className={itemStyle}>
                            {item.name}
                            {
                                item.icons &&
                                <UIIconGroup width="8.6rem"/>
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UIList
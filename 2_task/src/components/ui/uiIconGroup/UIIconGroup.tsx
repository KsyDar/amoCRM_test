import {ReactComponent as TelegramIcon} from '@/assets/icons/telegramIcon.svg'
import {ReactComponent as PhoneIcon} from '@/assets/icons/phoneIcon.svg'
import {ReactComponent as WhatsAppIcon} from '@/assets/icons/whatsAppIcon.svg'
import './UIIconGroup.scss'

type PropType = {
    width?: string;
}
function UIIconGroup(props: PropType) {
    const style = {
        width: props.width
    }

    return (
        <div className="icon-group" style={style}>
            <TelegramIcon/>
            <PhoneIcon/>
            <WhatsAppIcon/>
        </div>
    )
}

export default UIIconGroup
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';


const Icon: React.FC<FontAwesomeIconProps> = ({ icon, size, color }) => {

    return <FontAwesomeIcon icon={icon} size={size} color={color} />
}

export default Icon;
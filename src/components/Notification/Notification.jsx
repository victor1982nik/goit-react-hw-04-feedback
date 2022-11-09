import { Paragraph } from 'components/Statistics/Statistics.styled';
import PropTypes from 'prop-types';

export function Notification({ message }) {
    return <Paragraph>{message}</Paragraph>
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}
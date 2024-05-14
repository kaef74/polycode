import '../../css/InputError.css';

export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <li {...props} className={className}>
            <p>{message}</p>
        </li>
    ) : null;
}

import { sanitize } from 'dompurify';

const sanitinizer = (content) => {
    return {
        __html: sanitize(content)
    }
}

export default sanitinizer;
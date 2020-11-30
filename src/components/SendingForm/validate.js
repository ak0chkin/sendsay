const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = values => {
    const errors = {};
    if (!values['fromName']) {
        errors['fromName'] = 'Имя не может быть пустым';
    }
    if (!emailRegex.test(values['fromEmail'])) {
        errors['fromEmail'] = 'Неверный формат Email';
    }
    if (!values['fromEmail']) {
        errors['fromEmail'] = 'Email не может быть пустым';
    }
    if (!values['toName']) {
        errors['toName'] = 'Имя не может быть пустым';
    }
    if (!emailRegex.test(values['mca'])) {
        errors['mca'] = 'Неверный формат Email';
    }
    if (!values['mca']) {
        errors['mca'] = 'Email не может быть пустым';
    }
    if (!values['subject']) {
        errors['subject'] = 'Тема не может быть пустой';
    }
    if (!values['message']) {
        errors['message'] = 'Сообщение не может быть пустым';
    }

    return errors;
};

export default validate;

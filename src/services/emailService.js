import emailjs from '@emailjs/browser';

const EMAIL_CONFIG = {
    SERVICE_ID: 'service_bocg9g3',
    TEMPLATE_ID: 'template_s25b8zz',
    PUBLIC_KEY: 'dWW5kv6gw8Knsfyr2'
};

export class EmailService {
    static async sendContactForm(data) {
        try {
            const templateParams = {
                to_name: 'Администратор',
                from_name: data.name,
                message: `Телефон: ${data.phone}
Тип заявки: ${data.type || 'Заявка с сайта'}
${data.description ? `\nОписание ситуации: ${data.description}` : ''}`,
                phone_number: data.phone,
                form_type: data.type || 'Заявка с сайта',
                description: data.description || ''
            };

            console.log('Отправляемые данные:', templateParams);

            const result = await emailjs.send(
                EMAIL_CONFIG.SERVICE_ID,
                EMAIL_CONFIG.TEMPLATE_ID,
                templateParams,
                EMAIL_CONFIG.PUBLIC_KEY
            );

            return { success: true, result };
        } catch (error) {
            console.error('Error sending email:', error);
            return { 
                success: false, 
                error: 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже.' 
            };
        }
    }
}
import * as Yup from 'yup';
import { useFormik } from "formik";

export  const ContactForm = () => {

    const { handleSubmit, errors, touched } = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            Phone: '',
            subject: '',
            help: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string().min(3, 'Min. 3 characters').required('Required'),
            email: Yup.string().email('It should be a valid email').required('Required'),
            Phone: Yup.string().min(11, 'Min. 11 characters').required('Required'),
            subject: Yup.string().min(6, 'Min. 6 characters').required('Required'),
            help: Yup.string().min(20, 'Min. 20 characters').required('Required'),
        }),
        onSubmit: values => {
            // TODO: some action
        }
    });

    return (
        <form noValidate onSubmit={handleSubmit}>
            <div className='row'>
                <div className='col-md-6'>
                    <input
                        type="text"
                        placeholder="Full name"
                        className="form-contact"
                    />
                    {(touched.fullName && errors.fullName) && <span className="error">{errors.fullName}</span>}
                </div>
                <div className='col-md-6'>
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="form-contact"
                    />
                    {(touched.email && errors.email) && <span className="error">{errors.email}</span>}
                </div>
                <div className='col-md-6'>
                    <input
                        type="number"
                        placeholder="Phone"
                        className="form-contact"
                    />
                    {(touched.Phone && errors.Phone) && <span className="error">{errors.Phone}</span>}
                </div>
                <div className='col-md-6'>
                    <input
                        type="text"
                        placeholder="subject"
                        className="form-contact"
                    />
                    {(touched.subject && errors.subject) && <span className="error">{errors.subject}</span>}
                </div>
                <div className='col-md-12'>
                    <textarea
                        type="text"
                        placeholder="help"
                        className="form-contact"
                    />
                    {(touched.help && errors.help) && <span className="error">{errors.help}</span>}
                </div>
                <div className='col-md-6 mt-5'>
                    <button type="submit" className='Now'>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm;
import {CiMail} from 'react-icons/ci'
import {FiInstagram} from 'react-icons/fi'
import {ImWhatsapp} from 'react-icons/im'

const data = [
    {
        id: 1,
        icon: <ImWhatsapp/>,
        title: 'WhatsApp',
        desc: '(12) 99675-1672',
        link: 'https://api.whatsapp.com/send?phone=5512996751672'

    },

    {
        id: 2,
        icon: <FiInstagram/>,
        title: 'Instagram',
        desc: '@mateus_io_',
        link: 'https://www.instagram.com/mateus_io_/'

    },

    {
        id: 3,
        icon: <CiMail/>,
        title: 'Email',
        desc: 'mateus92.mgs@gmail.com',
        link: 'mailto:mateus92.mgs@gmail.com'

    }
]

export default data


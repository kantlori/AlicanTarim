import deepLink from './images/deep_linking.jpg';
import instalysis from './images/instalysis.jpg';
import nationCodePicker from './images/nation_code_picker.jpg';
import readfly from './images/readfly.jpg';
import templateBloc from './images/template_app_with_bloc.jpg';
import codeField from './images/verification_code_field.jpg';

const user = {
    "firstName": "Alican",
    "lastName": "TARIM",
    "profession": "Software Developer",
    "city": "Istanbul"
};

export const cards = [
    { image: deepLink, category: "Mobile App", desc: "Deep Linking" },
    { image: instalysis, category: "Mobile App", desc: "Instalysis" },
    { image: nationCodePicker, category: "Packages", desc: "Nation Code Picker" },
    { image: readfly, category: "Medium Articles", desc: "Readfly" },
    { image: templateBloc, category: "GitHub Repos", desc: "Template App with Bloc" },
    { image: codeField, category: "Mobile App", desc: "Verification Code Field" },
];

export default user; 

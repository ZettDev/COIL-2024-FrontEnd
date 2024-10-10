import { useState } from 'react';
import Image_background_login from '../assets/Image_background_login.png';
import logo_maua from '../assets/logo_maua.png';
import english from '../assets/english.svg';
import portuguese from '../assets/portuguese.svg';
import { InputText } from 'primereact/inputtext';
import { Eye, EyeSlash } from 'phosphor-react';

const translations = {
  en: {
    loginTitle: 'Please enter login details',
    emailPlaceholder: 'E-mail or ID',
    passwordPlaceholder: 'Password',
    errorMessage: 'Please fill in all fields.',
    forgotPassword: 'Forgot password?',
    loginButton: 'Login',
    orText: 'or',
    microsoftButton: 'Sign in with Microsoft'
  },
  pt: {
    loginTitle: 'Por favor, insira os dados de login',
    emailPlaceholder: 'E-mail ou ID',
    passwordPlaceholder: 'Senha',
    errorMessage: 'Por favor, preencha todos os campos.',
    forgotPassword: 'Esqueceu a senha?',
    loginButton: 'Entrar',
    orText: 'ou',
    microsoftButton: 'Entrar com a Microsoft'
  }
};

type Language = 'en' | 'pt';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false); 
  const [language, setLanguage] = useState<Language>('en'); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (!email || !password) {
      setHasError(true); 
      return;
    } else {
      setEmail('');
      setPassword('');
      setHasError(false); 
    }
  };

  const selectLanguage = (lang: Language) => {
    setLanguage(lang); 
  };

  return (
    <div className="h-screen w-full overflow-hidden relative">
      <img
        src={Image_background_login}
        alt="image background"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center">
        <div className='absolute top-5 right-5'>
          <button
            className={`transition duration-200 transform hover:scale-110 ${language === 'pt' ? '' : 'opacity-50 shadow-lg'}`}
            onClick={() => selectLanguage('pt')}
          >
            <img src={portuguese} alt="portuguese button" />
          </button>
        </div>
        <div>
          <button
            className={`absolute top-5 right-20 transition duration-200 transform hover:scale-110 ${language === 'en' ? '' : 'opacity-50 shadow-lg'}`}
            onClick={() => selectLanguage('en')}
          >
            <img src={english} alt="english button" />
          </button>
        </div>

        <div className='bg-[#EDEDED] w-[450px] h-[520px] z-10 rounded-3xl flex flex-col items-center pt-6 shadow-lg shadow-slate-500'>
          <img src={logo_maua} alt="logo_maua" className='mb-4' />
          <h1 className='text-[#000066] text-xl pt-3'>{translations[language].loginTitle}</h1>

          <InputText
            placeholder={translations[language].emailPlaceholder}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setHasError(false);
            }}
            className='w-80 mb-2 border-black border-2 mt-4 h-11 rounded-xl pl-3 bg-[#EDEDED] text-[#000000] placeholder:text-[#888888]'
            style={{ fontSize: '20px' }}
          />

          <div className="relative w-80 mb-1">
            <InputText
              placeholder={translations[language].passwordPlaceholder}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setHasError(false);
              }}
              className={`w-full border-black border-2 h-11 rounded-xl pl-3 bg-[#EDEDED] text-[#000000] placeholder:text-[#888888] mt-2 ${showPassword ? '' : 'pr-10'}`}
              style={{ fontSize: '20px' }}
              type={showPassword ? 'text' : 'password'}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-3 pt-2"
            >
              {showPassword ? <Eye size={24} color="#000066" /> : <EyeSlash size={24} color="#000066" />}
            </button>
          </div>

          {hasError && (
            <div className='w-80 text-left'>
              <p className="text-red-600 text-sm mb-2">{translations[language].errorMessage}</p>
            </div>
          )}

          <div className="flex w-80 justify-start">
            <a
              href="URL_DO_LINK"
              className='text-[#000066] text-base transition duration-100 ease-in-out transform hover:scale-105'
            >
              {translations[language].forgotPassword}
            </a>
          </div>

          <button
            className='bg-[#000066] text-white w-64 h-11 rounded-xl text-xl mt-5 transition duration-100 transform hover:scale-105'
            onClick={handleLogin}
          >
            {translations[language].loginButton}
          </button>

          <p className='py-2 text-lg text-[#000066]'>{translations[language].orText}</p>
          <button
            className='bg-[#000066] text-white w-64 h-11 rounded-xl text-xl transition duration-100 transform hover:scale-105'
          >
            {translations[language].microsoftButton}
          </button>
        </div>
      </div>
    </div>
  );
}
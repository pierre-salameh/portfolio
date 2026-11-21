import { useEffect, useState } from 'react'
import { FiGlobe } from 'react-icons/fi'
import './LanguageToggle.css'

function getCurrentLang() {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/[^/]*\/([^;]+)/)
  return match && match[1] === 'ar' ? 'ar' : 'en'
}

function clearTranslateCookie() {
  const expired = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'
  const host = window.location.hostname
  document.cookie = expired
  document.cookie = `${expired}; domain=${host}`
  document.cookie = `${expired}; domain=.${host}`
}

export default function LanguageToggle() {
  const [lang] = useState(getCurrentLang)

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  const toggle = () => {
    if (lang === 'en') {
      document.cookie = 'googtrans=/en/ar; path=/'
    } else {
      clearTranslateCookie()
    }
    window.location.reload()
  }

  return (
    <button
      type="button"
      className="site-lang-toggle notranslate"
      translate="no"
      onClick={toggle}
      aria-label={lang === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
    >
      <FiGlobe />
      <span>{lang === 'en' ? 'عربي' : 'English'}</span>
    </button>
  )
}